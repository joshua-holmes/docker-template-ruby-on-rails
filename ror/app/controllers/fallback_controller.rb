class FallbackController < ApplicationController
  def index
    # Directs all non-api traffic to React app
    render file: 'public/index.html'
  end
end
