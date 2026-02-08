class Sex < ApplicationRecord
  validates :value, presence: true, inclusion: { in: %w[M F] }
end
