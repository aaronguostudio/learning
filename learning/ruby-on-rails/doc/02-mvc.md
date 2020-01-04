# Model

## Assocation
:dependent
- :destroy, when the object is destroyed, destroy will be called on its associated objects.
- :delete, when the object is destroyed, all its associated objects will be deleted directly from the database without calling their destroy method.

:validates_presence_of
- https://apidock.com/rails/ActiveRecord/Validations/ClassMethods/validates_presence_of


## Rails model is using Active Recode design pattern and ORM

### One to One
- In rails irb
- subject.page = nil     // remove relationship 
- subject.page = page    // add relationship, will store in db
- subject.age.destory    // remove relationship and remove the record

### One to Many
- subject.pages
- subject.pages << page
- subject.pages = [...]
- subject.pages.delete(page)
- subject.pages.destroy(page)
- subject.size
- subject.pages.empty?
- subject.clear

## Active Record Query
- https://guides.rubyonrails.org/active_record_querying.html


## ApplicationRecord
- In Rails 5, Model < ApplicationRecord < ActiveRecord::Base
```ruby
# Old way to include
# But now, ActiveRecord::Base forever includes MyAwesomeFeature and any class inheriting from it also includes MyAwesomeFeature even if they don’t want it.
module MyAwesomeFeature
  def do_something_great
    puts "Doing something complex stuff!!"
  end
end

ActiveRecord::Base.include(MyAwesomeFeature)


# New way
# But with ApplicationRecord, they will be localized to only those models which are inheriting from ApplicationRecord, effectively only to your application.
class ApplicationRecord < ActiveRecord::Base
  include MyAwesomeFeature

  self.abstract_class = true
end

```


# Controller

## Build-in props
- request.headers["..."]
- params[:username]