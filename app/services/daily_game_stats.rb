class DailyGameStats
  TTL = 48.hours.to_i

  def initialize(user_id, date = Time.zone.today)
    @user_id = user_id
    @date_string = date.to_s
    @key = "daily_game:#{@date_string}:#{@user_id}"
  end

  def stats
    data = $redis.hgetall @key

    if data.empty?
      { user_id: @user_id, date: @date_string, guesses: [] }
    else
      {
        user_id: @user_id,
        date: @date_string,
        guesses: data["guesses"] ? JSON.parse(data["guesses"]) : []
      }
    end
  end

  def nb_tries
    data = $redis.hgetall @key
    if data.empty? or not data["guesses"]
      0
    else
      JSON.parse(data["guesses"]).length
    end
  end

  def add_guess(guess_string)
    current_stats = self.stats
    current_guesses = current_stats[:guesses]

    current_guesses << guess_string

    $redis.hset(@key, "guesses", current_guesses.to_json)

    set_expiry_if_needed
  end

  private

  def set_expiry_if_needed
    # `ttl` returns -1 if no expiry is set, -2 if key doesn"t exist
    if $redis.ttl(@key) == -1
      $redis.expire(@key, TTL)
    end
  end
end
