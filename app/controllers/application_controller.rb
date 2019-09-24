class ApplicationController < ActionController::API
  include ::ActionController::Cookies



    def logged_in?
    !!current_user
    end

    def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id] # only make the db call if there is in fact a session at the moment
    end

end
