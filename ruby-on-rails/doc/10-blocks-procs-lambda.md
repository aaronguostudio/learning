# Block
```ruby
  [1, 2, 3].each do |num|
    puts num
  end
```


# yield
```ruby
  def print_once
    yield
  end

  print_once { puts 'Print once' }

  def print_param
    yield 1
    yield 2
  end
  print_param { |number| puts number * 10 }
```


# Implicit vs Explicit Blocks

```ruby
  def explicit_block(&block)
    block.call # same as yield
  end

  explicit_block { puts 'Explicit block called' }


  # Check if block is given
  def check_block
    return 'No block given' unless block_given?
    yield
  end
```


# Lambda

```ruby
  say_something = -> { puts 'Say Something' }
  say_something.call
  say_something.()
  say_something.[]
  say_something.===

  lambda_with_params = -> (x) { x * 2 }
  lambda_with_params.call(20)
```


# Procs
- procs and lambda are very similar

```ruby
  my_proc = Proc.new { |x| puts x }
  my_proc.call(1)

  # Different from lambda, proc can ignore arguments
  t = Proc.new { |x,y| puts "I don't care about arguments" }
```

# Lambda and Procs
- Lambdas are defined with -> {} and procs with Proc.new {}.
- Procs return from the current method, while lambdas return from the lambda itself.
- Procs don’t care about the correct number of arguments, while lambdas will raise an exception.