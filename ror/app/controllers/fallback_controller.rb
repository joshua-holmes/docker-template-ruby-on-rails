class FallbackController < ActionController::Base
  def index
    # Directs all non-api traffic to React app
    render file: 'public/index.html'
  end
end
