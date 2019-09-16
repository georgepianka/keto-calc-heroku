class Day < ApplicationRecord
  belongs_to :user
  has_many :entries

  validates_presence_of :date
  validates_uniqueness_of :date

  validates :entries, presence: true

  accepts_nested_attributes_for :entries, reject_if: :all_blank
end
