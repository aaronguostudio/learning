if (ARGV.length == 0)
  puts <<-EOS
    Put arguments for running:
    1 - Initialize a class
    2 - class attr_read, attr_write, attr_associate
    3 - Ruby inheritant
    4 - Ruby Polymorphism
    5 - Ruby Polymorphism decorator
  EOS
end

OPTION = ARGV[0]

if OPTION == '1'
  class Customer
    def initialize(id, name, addr)
      @cust_id = id
      @cust_name = name
      @cust_addr = addr
    end

    # call is like a class function
    def self.call
      puts 'class call called'
    end

    # instance call function
    def call
      puts 'instance call called'
    end

    def display_details()
      puts "Customer id #@cust_id"
      puts "Customer name #@cust_name"
      puts "Customer address #@cust_addr"
    end
  end

  cust1 = Customer.new("1", "Aaron", "Tuscany")
  cust2 = Customer.new("2", "Alex", "SAIT")
  cust3 = Customer.new("3", "Chris", "Cochrane")

  cust1.display_details
  cust2.display_details
  cust3.display_details
  Customer.call
  cust1.call
end

if OPTION == '2'
  class Person

    # attr_reader :name
    # attr_writer :name

    # attr_accessor combine reader and writer
    attr_accessor :name

    def initialize(name)
      @name = name
    end

    # getter in ruby
    # def name
    #   @name
    # end

    # setter in ruby
    # def name=(name)
    #   @name = name
    # end

  end

  # I can't do this beccause name is a private var unless I have def name function or add attr_reader
  aaron = Person.new('Aaron')
  puts aaron.name
  aaron.name = 'Aaron Guo'
  puts aaron.name
  
end

if OPTION == '3'
  class GenericParser
    def parse
      raise NotImplementedError, 'You must implement the this function'
    end
  end

  class JsonParser < GenericParser
    def parse
      puts "JSON Parser"
    end
  end

  class XmlParser < GenericParser
    def parse
      puts "XML Parser"
    end
  end
  
  jp = JsonParser.new
  jp.parse
  xp = XmlParser.new
  xp.parse
end


# Ruby Polymorphism
# https://thoughtbot.com/blog/back-to-basics-polymorphism-and-ruby
if ARGV[0] == '4'
  class JsonParser
    def parse
      puts 'JSON Parser'
    end
  end

  class XmlParser
    def parse
      puts 'XML parser'
    end
  end

  class GenericParser
    def parse(parser)
      parser.parse
    end
  end

  gp = GenericParser.new
  gp.parse(JsonParser.new)
  gp.parse(XmlParser.new)
  
end

if ARGV[0] == '5'
  class Parser
    def parse
      puts 'The Parser class received the parse method'
    end
  end

  class XmlParser
    def initialize(parser)
      @parser = parser
    end
  
    def parse
      @parser.parse
      puts 'An instance of the XmlParser class received the parse message'
    end
  end

  class JsonParser
    def initialize(parser)
      @parser = parser
    end
  
    def parse
      puts 'An instance of the JsonParser class received the parse message'
      @parser.parse
    end
  end
  
  puts 'Using the XmlParser'
  parser = Parser.new
  XmlParser.new(parser).parse

  puts 'Using the JsonParser'
  JsonParser.new(parser).parse

  puts 'Using both Parsers!'
  JsonParser.new(XmlParser.new(parser)).parse
  
end