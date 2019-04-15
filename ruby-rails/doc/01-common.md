# About Ruby
- OOP
- No primitives
- Most everthing is object
- Ruby is dynamically and strongly typed

# RVM
- rvm install ruby-2.4.1

# Add dependencies
- bundle add package-name

# Rails cli
- rails new project-name -d mysql                         // -d is database
- rails new project-name --api -T                         // Create a api project without test
- rails c environment                                     // default environment is development
- rails g controller Subjects index show new edit delete  //Controller is capital and plural with all of the views
- rails routes     // list all of the routes


# Rails DB
- rails g model User
- rails g migration migration_name    // create a migration
- rails db:migrate

# ActionRecord Syntax
- Model = Model.new
- Model = Model.new(:attr1=value, :attr2=value)
- Model.attr = value
- Model.new_record?       // true is catching, false is in db
- Model.save
- Model.create(...)       // new and save
- Model.update(...)       // update and save
- Model.updateAttributes 
- Model.delete()          // delete relationship
- Model.destroy()         // delete a record and relationship
- Model.find()            // find by id if not found throw error
- Model.find_by_id()      // find by id if not found return nil
- Model.all
- Model.first
- Model.last
- Model.attribute_names

# Condition Express Types
- Model.where(:prop => name)
- Model.where("prop = name")
- Model.where(["prop = ?", "name:])
- Model.order(:position).limit(20).offset(50)
- Model.order("position")
- Model.order(:position => :asc)
- Model.order("positon ASC")
- Model.order(:position => :desc)
- Model.order("positon DESC")
- Model.order("subjects.create_at ASC")  // when joining tables
- instance.errors.full_message   // if receive error, show the full message

# Named Scopes
```ruby
class Model < ApplicationRecord
  scope :visible, lambda{ where(:visible => true) }
  scope :invisible, lambda{ where(:visible => false) }
  scope :sorted, lambda{ order("position ASC") }
  scope :newest_first, lambda{ order("created_at DESC") }
  scope :search, lambda{ |query| where(["name LIKE ?", "%#{query}%"]) }
end
```

# rails console
- page.somefunctions(true)     // reload from db instead of cache


# Ruby Language
- yield
- rescued


# Common Questions
- # unknow rails
  - https://stackoverflow.com/questions/7788946/rails-keeps-telling-me-that-its-not-currently-installed

# Ruby 
- https://simpleror.wordpress.com/2009/03/15/q-q-w-w-x-r-s/