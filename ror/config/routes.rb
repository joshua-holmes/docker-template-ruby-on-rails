Rails.application.routes.draw do
  namespace :api do
    resources :todos, only: [:create, :destroy]
    resources :users, only: [:create]
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
