require "net/http"
require "json"
require "uri"

class Api::DiscordTokenController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    auth_code = params[:code]

    if auth_code.blank?
      render json: { error: "No code provided" }, status: :bad_request
      return
    end

    client_id = Rails.application.credentials.discord![:client_id]
    client_secret = Rails.application.credentials.discord![:client_secret]

    if client_id.blank? || client_secret.blank?
      render json: { error: "Discord credentials not configured on server" }, status: :internal_server_error
      return
    end

    uri = URI.parse("https://discord.com/api/oauth2/token")

    request = Net::HTTP::Post.new(uri)
    request.content_type = "application/x-www-form-urlencoded"
    request.set_form_data(
      "client_id" => client_id,
      "client_secret" => client_secret,
      "grant_type" => "authorization_code",
      "code" => auth_code
    )

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    response = http.request(request)

    if response.is_a?(Net::HTTPSuccess)
      token_data = JSON.parse(response.body)

      render json: { access_token: token_data["access_token"] }
    else
      Rails.logger.error "Discord Token Exchange Failed: #{response.body}"
      render json: { error: "Failed to exchange token with Discord", details: response.body }, status: :internal_server_error
    end

  rescue => e
    Rails.logger.error "Error in DiscordTokenController: #{e.message}"
    render json: { error: "Internal server error" }, status: :internal_server_error
  end
end
