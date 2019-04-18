```ruby
def testEOS
  <<-EOS
    a
    b
    c
  EOS
end
```

# Check existence
- https://blog.appsignal.com/2018/09/11/differences-between-nil-empty-blank-and-present.html
- nil?
  is a Ruby method on the Object class. Since all classes inherit from this class, #nil? can be used on any object. It returns true for nil (an instance of the class NilClass) and false for everything else.
- empty?
  is a method that can be used on strings, arrays, hashes and sets. It returns true if the instance of the object has a length of zero.
- blank?
  blank? is a Rails method (in ActiveSupport). It operates on any object.
  - For strings, it will return true for empty strings as well as strings containing only whitespace characters.
  - For arrays, hashes and sets, it works just like #empty?, in that it returns true if they have no elements.
  - It returns false for true and true for any falsey conditions (i.e. nil and false).

# Ruby Set
- https://ruby-doc.org/stdlib-2.4.0/libdoc/set/rdoc/Set.html

# DHCP
- make sure only on turn on DHCP
