class Item < ApplicationRecord
  belongs_to :todo

  #validations
  validates_presence_of :name
end
