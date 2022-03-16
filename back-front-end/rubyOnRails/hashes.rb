movies = {}

while 1
  puts "Input:"
  choice = gets.chomp
  case choice
    when "add"
      puts "Movie title?"
      title = gets.chomp
      puts "Rating?"
      rating = gets.chomp
      if movies[title.to_sym] == nil 
        movies[title.to_sym] = rating.to_i
        puts "Movie added!"
      else
        puts "Movie already exists"
      end
    when "update"
      puts "Movie title?"
      title = gets.chomp
      puts "Rating?"
      rating = gets.chomp
      if movies[title.to_sym] != nil 
        movies[title.to_sym] = rating.to_i
        puts "Movie updated!"
      else
        puts "Movie does not exist"
      end
    when "display"
      movies.each {|movie, rating| 
      puts "#{movie}: #{rating}"
      }
    when "delete"
      puts "Movie title?"
      title = gets.chomp
      if movies[title.to_sym] == nil 
        puts "Movie does not exist"
      else
        movies.delete(title.to_sym)
        puts "Movie deleted!"
      end
    else
      puts "Error!"
      break
  end
end
