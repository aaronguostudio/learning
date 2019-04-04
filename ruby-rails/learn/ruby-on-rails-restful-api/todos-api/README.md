# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# Setup
- https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one
- Add dependencies
- bundle install
- rails generate spec:install
- mkdir spec/factories
- add assocications to model
- bundle exec rspec

# Auto load dependencies
- in spec/rails_helper.rb
- Dir[Rails.root.join('spec', 'support', '**', '*.rb')].each { |f| require f }