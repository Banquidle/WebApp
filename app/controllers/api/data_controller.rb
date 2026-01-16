require "net/http"
require "json"
require "uri"

class Api::DataController < ApplicationController
  skip_before_action :verify_authenticity_token

  def nb_tries_player
    user_id = params[:user_id]

    if user_id.blank?
      render json: { error: "Provide a user." }, status: :bad_request
      return
    end

    u_sess = DailyGameStats.new user_id
    render json: { nb: u_sess.nb_tries_yesterday }, status: :ok
  end
end
