require 'net/http'
def testRescue(a_number)
  puts 'This is before error'
  raise 'There is an error' unless a_number.is_a? Numeric
  puts 'This is after error'
end

def testSwallowError
  begin
    yield
  rescue Exception
    puts 'Sallowed the error'
  ensure
    puts 'Run this no matter if there is an error or not'
  end
end

# Check current ip
# Run command line in ruby puts command
def linux_ip_info
  <<-EOS
    IP Info:
    #{Net::HTTP.get(URI("https://api.ipify.org"))}
    #{`pwd`}
  EOS
end

# testSwallowError { testRescue('cause an error') }
puts linux_ip_info

