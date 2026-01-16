redis_url = ENV.fetch("REDIS_URL", "redis://redis:6379/0")
$redis = Redis.new(url: redis_url)

unless ENV['RAILS_ASSETS_PRECOMPILE'] || ENV['SECRET_KEY_BASE_DUMMY']
  begin
    puts "Connecting to Redis at #{redis_url}..."
    $redis.ping
  rescue Redis::CannotConnectError => e
    puts "Warning: Could not connect to Redis: #{e.message}"
  end
end
