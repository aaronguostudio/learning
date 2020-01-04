# Resources
```ruby
resources :subjects do
  member do
    get :delete
  end
end
```


# URL Helpers
- <%= link_to('All Subjects', subjects_path) %>
- <%= link_to('All Subjects', subjects_path(:page => 3)) %>
- <%= link_to('Show Subjects', subject_path(@subject.id)) %>
- <%= link_to('Show Subjects', subject_path(@subject.id, :format => 'verbose')) %>
- <%= link_to('Edit Subject', edit_subject_path(@subject.id)) %>

# Models
- rails g model Todo title:string created_by:string
- rails g model Item name:string done:boolean todo:references
- rails db:migrate

# Test
- add tests
- rails exec rspec
- add associations in model
- rails exec rspec

# Controller
- rails g controller ModelNamePlusS