class Computer
  @@users = {}

  def initialize(username, password)
    @username = username
    @password = password
    @files = {}
    @@users[username] = password
  end

  def create(filename)
    time = Time.now
    @files[filename] = time
    puts "New file created"
  end

  def Computer.get_users
    return @@users
  end
end

my_computer = Computer.new('artainmo','pass22'):wq
