class DailyGameStats
  TTL = 48.hours.to_i

  def initialize(user_id)
    @user_id = user_id
    @date_string = Time.zone.today.to_s
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

  def add_guess(guess_string)
    current_stats = self.stats
    current_guesses = current_stats[:guesses]

    current_guesses << guess_string

    $redis.hset(@key, "guesses", current_guesses.to_json)

    set_expiry_if_needed
  end

  def self.nb_tries_for_yesterday
    date_string = (Time.zone.today - 1.day).to_s
    pattern = "daily_game:#{date_string}:*"

    result = {}

    cursor = "0"
    begin
      cursor, keys = $redis.scan(cursor, match: pattern, count: 100)

      keys.each do |key|
        data = $redis.hgetall(key)

        next if data.empty?

        guesses =
          if data["guesses"]
            JSON.parse(data["guesses"])
          else
            []
          end

        user_id = key.split(":").last
        result[user_id] = guesses.length.to_s
      end
    end while cursor != "0"

    result.to_json
  end

  private

  def set_expiry_if_needed
    # `ttl` returns -1 if no expiry is set, -2 if key doesn"t exist
    if $redis.ttl(@key) == -1
      $redis.expire(@key, TTL)
    end
  end
end
