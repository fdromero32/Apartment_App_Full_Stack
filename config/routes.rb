Rails.application.routes.draw do
  resources :apartments, constraints: ->(request) { !request.format.html? }
  devise_for :users

  get "*path", to: "home#protected", constraints: ->(request) { request.format.html? }
  root to: "home#unprotected"
end
