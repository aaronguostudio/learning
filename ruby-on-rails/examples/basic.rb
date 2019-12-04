def test
  @test = 'test1'
  @test ||= 'test2'
  puts @test
end

test