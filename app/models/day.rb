class Day < ApplicationRecord
  belongs_to :user
  has_many :entries

  validates_presence_of :date
  validates_uniqueness_of :date
end
