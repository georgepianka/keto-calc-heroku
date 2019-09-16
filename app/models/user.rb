class User < ApplicationRecord
  has_secure_password
  has_many :days
  has_many :entries, through: :days

  validates_presence_of :username, :email
  validates_uniqueness_of :username, :email


      #def self.find_or_create_from_facebook(auth_hash)
    #      self.where(email: auth_hash["info"]["email"]).first_or_create do |u|
    #        u.username = auth_hash.info.name
    #        u.password = SecureRandom.hex
    #      end
    #  end


    def self.find_or_create_from_facebook(authorization)
          self.where(email: authorization['email']).first_or_create do |u|
            u.username = authorization['name']
            u.password = SecureRandom.hex
          end
    end

end
