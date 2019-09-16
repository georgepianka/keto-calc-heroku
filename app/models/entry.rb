class Entry < ApplicationRecord
  belongs_to :day

  validates_presence_of :net_carbs
  validates_presence_of :calories

end
