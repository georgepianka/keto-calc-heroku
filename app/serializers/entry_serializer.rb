class EntrySerializer
  include FastJsonapi::ObjectSerializer
  attributes :day_id, :name, :net_carbs, :calories, :protein, :fat
  belongs_to :day, serializer: DaySerializer
end
