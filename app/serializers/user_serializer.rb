class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email, :username
  has_many :days, serializer: DaySerializer
end
