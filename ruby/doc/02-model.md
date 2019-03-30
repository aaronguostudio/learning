# Basic

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