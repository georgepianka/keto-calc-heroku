class EntrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :day_id, :net_carbs, :calories, :protein, :fat
  belongs_to :day, serializer: DaySerializer
end
