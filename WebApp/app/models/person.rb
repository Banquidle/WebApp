class Person < ApplicationRecord
  belongs_to :first_name
  belongs_to :last_name
  belongs_to :sex
  belongs_to :pro_situation
  belongs_to :location
  belongs_to :age_group

  validates :quickname, presence: true, uniqueness: true

  def is_birthday?
    birth_day == Date.today.day and birth_month == Date.today.month
  end
end
