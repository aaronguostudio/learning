class Page < ApplicationRecord

  # belongs_to :subject, { :foreign_key => 'subject_id' }
  # belongs_to :subject, { :optional => true }  // turn on validation
  belongs_to :subject
  has_many :sections
  has_and_belongs_to_many :admin_users

end
