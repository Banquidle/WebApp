require "net/http"
require "json"
require "uri"

class Api::DataController < ApplicationController
  skip_before_action :verify_authenticity_token

  def nb_tries_yesterday
    user_id = params[:user_id]

    if user_id.blank?
      render json: { error: "Provide a user." }, status: :bad_request
      return
    end

    yesterdays_session = DailyGameStats.new(user_id, 1.day.ago.to_date)
    render json: { nb: yesterdays_session.nb_tries }, status: :ok
  end
end
