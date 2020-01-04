# Ruby on Rails

## Concepts

- ActiveSupport
- ActiveRecord
- ActiveJob
- ActionMailer

## Gem

- gem list
- gem environment
  - get gem environment related variables and the gem path

## gemfile

```gemfile

gem 'package_name', 'version_number'
gem 'package_name', :git => 'repo_url', :branch => 'branch_name'

group :development, :test do
  gem 'package_name', 'version_number'
end

group :release do
  gem 'package_name', 'version_number'
end

```

## packages

- auto_strip_attributes
- yard
  - a ruby documentation tool
- jbuilder
  - json formatter
- pundit
  - lightweight auth polices
- rspec-rails
  - Rspec test framework with rails
- factory_bot_rails
  - generate factory for unit testing
- pry
  - binding.pry, debugging tool
