require "net/http"
require "json"
require "uri"

class Api::DataController < ApplicationController
  skip_before_action :verify_authenticity_token

  def nb_tries_yesterday
    yesterdays_data = DailyGameStats.nb_tries_for_yesterday
    render json: yesterdays_data, status: :ok
  end
end
