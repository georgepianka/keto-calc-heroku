class Entry < ApplicationRecord
  belongs_to :user
  validates_presence_of :date
  validates_presence_of :calories
  validates_presence_of :net_carbs
  validates_presence_of :weight
  # Some Entries will not have a value for :protein / :fat attributes

end
