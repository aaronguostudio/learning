# About Ruby
- OOP
- No primitives
- Most everthing is object

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
- Subject = Subject.new
- Subject = Subject.new(:attr1=value, :attr2=value)
- Subject.attr = value
- Subject.new_record?       // true is catching, false is in db
- Subject.save
- Subject.create(...)       // new and save
- Subject.update(...)       // update and save
- Subject.updateAttributes 
- Subject.delete()          // delete relationship
- Subject.destroy()         // delete a record and relationship
- Subject.find()            // find by id if not found throw error
- Subject.find_by_id()      // find by id if not found return nil
- Subject.all
- Subject.first
- Subject.last

# Condition Express Types
- Subject.where(:prop => name)
- Subject.where("prop = name")
- Subject.where(["prop = ?", "name:])
- Subject.order(:position).limit(20).offset(50)
- Subject.order("position")
- Subject.order(:position => :asc)
- Subject.order("positon ASC")
- Subject.order(:position => :desc)
- Subject.order("positon DESC")
- Subject.order("subjects.create_at ASC")  // when joining tables
- instance.errors.full_message   // if receive error, show the full message

# Named Scopes
```ruby
class Subject < ApplicationRecord
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
- <<-
- 