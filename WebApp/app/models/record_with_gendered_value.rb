class RecordWithGenderedValue < ApplicationRecord
  self.abstract_class = true

  def gendered_from(sex)
    if self.translation_f and sex.value == 'F'
      self.translation_f
    else
      self.name
    end
  end
end