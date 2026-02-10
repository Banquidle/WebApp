class ProSituation < RecordWithGenderedValue
  has_many :people

  validates :name, presence: true, uniqueness: true

  def get_related
    related_ids =
      ProSituationLink.where(pro_1: self.id).pluck(:pro_2) +
      ProSituationLink.where(pro_2: self.id).pluck(:pro_1)

    ProSituation.where(id: related_ids.uniq)
  end
end