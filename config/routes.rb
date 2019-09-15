Rails.application.routes.draw do
  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/signup", to: "api/v1/users#create"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"

  #get 'api/v1/auth/facebook/callback' => 'api/v1/sessions#create'
  post 'api/v1/auth/facebook_login' => 'api/v1/sessions#authenticate_facebook_user'

  namespace :api do
    namespace :v1 do
      resources :entries
      resources :users

    end
  end

end
