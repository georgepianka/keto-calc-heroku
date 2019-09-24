class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update]

  def index
    #if logged_in?
      @users = User.all
      options = {}
      options[:include] = [:days, :'days.entries']
      render json: UserSerializer.new(@users, options)
    #else
    #  render json: {
    #    error: "You must be logged in to see the User Index!"
    #  }
    #end
  end

  def show
    user_json = UserSerializer.new(current_user).serialized_json
    render json: user_json
  end

    def create
      @user = User.new(user_params)

      if @user.save
        session[:user_id] = @user.id
        render json: UserSerializer.new(@user), status: :created
      else
        render json: {error: @user.errors.full_messages.to_sentence}, status: :unprocessable_entity
      end
    end

    def update
      if @user == current_user && @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end


  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :username, :password)
    end
end
