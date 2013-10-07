get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  
    user_input = params[:user_input]
    if user_input == user_input.upcase
      "not since 1963"
    else
      "speak up!"
    end
end

# .on()

# .post()

# .preventDefault()

# .serialize()

# .remove()

# .append()

# console.log()

# .show()
# .hide()
