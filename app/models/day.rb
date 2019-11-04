class Day < ApplicationRecord
  belongs_to :user
  has_many :entries, dependent: :destroy

  validates_presence_of :date
  validates_uniqueness_of :date
  validates_numericality_of :weight, allow_nil: true


  accepts_nested_attributes_for :entries, :allow_destroy => true, reject_if: :all_blank
end
