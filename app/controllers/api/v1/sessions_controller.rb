class Api::V1::SessionsController < ApplicationController


  def create
  #  if auth_hash = request.env["omniauth.auth"]
  #    @user = User.find_or_create_from_facebook(auth_hash)
  #    session[:user_id] = @user.id
  #    render json: UserSerializer.new(@user), status: :ok
  #  else
      authenticate_user
  #  end
  end

  def authenticate_user
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: UserSerializer.new(@user), status: :ok
    else
      render json: {
        error: "Invalid Credentials!"
      }
    end
  end

  def get_current_user
    if logged_in?
      render json: UserSerializer.new(current_user)
    else
      render json: {
        error: "Please Sign-Up or Log-In"
      }
    end
  end

  def destroy
    if session.clear
      render json: {
      notice: "You Are Logged Out!"
      }, status: :ok
    else
    render json: {notice: "Oops... Something Went Wrong! "}, status: 500
    end
  end

  def authenticate_facebook_user

     token = params[:token]

     response = Faraday.get("https://graph.facebook.com/app?access_token=#{token}")
     data = JSON.parse(response.body)

     if data['id'] == ENV['FACEBOOK_KEY']

        uid = params[:uid]

        response = Faraday.get("https://graph.facebook.com/#{uid}?access_token=#{token}&fields=email, name ")
        authorization = JSON.parse(response.body)

        @user = User.find_or_create_from_facebook(authorization)
        session[:user_id] = @user.id
        render json: UserSerializer.new(@user), status: :ok
     else
        render json: {
        error: "Invalid Credentials!"
        }
     end

  end




  private

#If the "Content-Type" header of your request is set to "application/json", Rails will automatically load your parameters into the params #hash, which you can access as you would normally.

    def token_params
      params.require(:session).permit(:token, :uid)
    end

    def login_params
      params.require(:session).permit(:token, :uid)
    end


end
