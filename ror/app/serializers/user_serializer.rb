class UserSerializer < ActiveModel::Serializer
  attributes :name, :username
  has_many :todos
end
