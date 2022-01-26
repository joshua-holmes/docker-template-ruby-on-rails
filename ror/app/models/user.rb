class User < ApplicationRecord
  has_secure_password
  validates :username, :password_confirmation, presence: true
  validates :username, uniqueness: true

  has_many :todos
end
