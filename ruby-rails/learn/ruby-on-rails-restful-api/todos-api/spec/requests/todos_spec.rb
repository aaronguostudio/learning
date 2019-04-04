require 'rails_helper'

RSpec.describe 'Todos API', type: :request do
  # init test data
  let!(:todos) { create_list(:todo, 10) }

end