class DaySerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id , :date, :weight

  attribute :total_net_carbs do |object|
    object.entries.sum(:net_carbs)
  end

  attribute :total_calories do |object|
    object.entries.sum(:calories)
  end

  attribute :total_protein do |object|
    object.entries.sum(:protein)
  end

  attribute :total_fat do |object|
    object.entries.sum(:fat)
  end

  belongs_to :user, serializer: UserSerializer
  has_many :entries, serializer: EntrySerializer
end
