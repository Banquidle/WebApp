class GameController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [ :submit_guess ]
  before_action :get_todays_person, :require_auth

  def load_content
    @people = Person.joins(:first_name, :last_name).select("quickname, first_names.content AS firstName, last_names.content AS lastName").order!(:firstName)

    u_sess = DailyGameStats.new @user_id

    prev_guesses = u_sess.stats[:guesses]

    @prev_people = Person.where quickname: prev_guesses
    @prev_people = prev_guesses.map { |q| @prev_people.find { |p| p.quickname == q } }.compact.reverse

    @nb_tries = prev_guesses.length
    @won = @prev_people.include? @todays_person

    respond_to do |format|
      format.turbo_stream {
        render turbo_stream: turbo_stream.replace("temp-loading", template: "game/index")
      }
    end
  end

  def submit_guess
    u_sess = DailyGameStats.new @user_id

    prev_guesses = u_sess.stats[:guesses]

    @person = Person.find_by quickname: params[:quickname]

    respond_to do |format|
      if prev_guesses.include? @todays_person.quickname
        flash.now[:error] = "Partie terminée"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif @person.nil?
        flash.now[:alert] = "Personne pas trouvée. 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      elsif prev_guesses.include? @person.quickname
        flash.now[:alert] = "Déjà essayé ! 🐒"
        format.turbo_stream { render turbo_stream: turbo_stream.replace("flash", partial: "layouts/flash") }

      else
        u_sess.add_guess @person.quickname
        @nb_tries = prev_guesses.length + 1

        format.turbo_stream
      end
    end
  end

  private

  def get_todays_person
    @todays_person = TodaysPersonService.get_daily
  end

  def require_auth
    @user_id = params[:user_id]
    unless @user_id.present?
      redirect_to root_path, alert: "Authentication is required."
    end
  end
end
