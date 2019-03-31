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

