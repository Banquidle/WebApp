class TodaysPersonService
  def self.get_daily
    todays = get_quickname_of Date.today
    yesterdays = get_quickname_of Date.yesterday

    if todays == yesterdays
      fifteen_ago = get_quickname_of(Date.today - 15)
      Person.find_by quickname: fifteen_ago
    else
      Person.find_by quickname: todays
    end
  end

  def self.get_determinist
    Person.find_by(quickname: "zozo")
  end

  private

  def self.get_quickname_of(date)
    quicknames = Person.order(:quickname).pluck(:quickname)
    hex = Digest::MD5.hexdigest(date.to_s)
    idx = hex.to_i(16) % quicknames.size
    quicknames[idx]
  end
end
