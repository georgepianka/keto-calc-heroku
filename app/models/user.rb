class User < ApplicationRecord
  has_secure_password
  has_many :days
  has_many :entries, through: :days

  validates :username, presence: true
  validates :password, presence: true, length: {minimum: 6}, allow_nil: true
  # has_secure_password ensures can't be blank on create. User loses the cached value for password on reload from database.
  # allowing nil password_field on update so saving without entering anything will NOT overwrite password.
  validates :email, presence: true
  validates :email, :uniqueness => {:case_sensitive => false}
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }


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
