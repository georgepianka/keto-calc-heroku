class Entry < ApplicationRecord
  belongs_to :day


  validates_presence_of :name
  validates_presence_of :net_carbs
  validates_presence_of :calories

  validates_numericality_of :net_carbs, :calories, :protein, :fat, allow_nil: true

end
