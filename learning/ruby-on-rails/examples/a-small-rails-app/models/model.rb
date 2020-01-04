class User < ActiveRecord

  self.abstract_class = true

  include OtherHelperClass

  enum user_role: { admin: 0, user: 1, support: 2, custom: 3 }

  belongs_to :comapny
  belongs_to :creator, class_name: 'User', optional: true

  validates :email, :email, presence: true, if: -> { # simple validation rule }

  def self.find_user_by_name(name)
    # find_user_by_name
  end

  def isAdmin?
    # if user.role == :admin
  end

  private

  def update_password
    # update_password
  end

end
