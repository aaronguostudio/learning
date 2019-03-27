# About Ruby
- OOP
- No primitives
- Most everthing is object

# Rails console
- rails c environment       // default environment is development

# ActionRecord Syntax
- Subject = Subject.new
- Subject = Subject.new(:attr1=value, :attr2=value)
- Subject.attr = value
- Subject.new_record?       // true is catching, false is in db
- Subject.save
- Subject.create(...)       // new and save
- Subject.update(...)       // update and save
- Subject.updateAttributes
- Subject.destroy           // delete a record gracefully
- Subject.find()            // find by id if not found throw error
- Subject.find_by_id()      // find by id if not found return nil
- Subject.all
- Subject.first
- Subject.last
