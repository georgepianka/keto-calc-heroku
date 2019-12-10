Rails.application.routes.draw do
  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/signup", to: "api/v1/users#create"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"

  #get 'api/v1/auth/facebook/callback' => 'api/v1/sessions#create'
  post 'api/v1/auth/facebook_login' => 'api/v1/sessions#authenticate_facebook_user'

  #React-Router and Heroku Deployment: create a ‘fallback route’ for all routes or paths that don’t match or are not included in your client’s routes. That way Rails will pass anything it doesn’t match to index.html and react-router will take over.

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  namespace :api do
    namespace :v1 do
      resources :entries
      resources :users
      resources :days

    end
  end

end
