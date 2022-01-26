class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_rescue
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_rescue

  before_action :authorize

  private

  def authorize
    @current_user = User.find_by id: session[:user_id]
    render json: { error: "Not authorized" }, status: :unauthorized unless @current_user
  end

  def record_not_found_rescue e
    render json: { errors: [e.message] }, status: :not_found
  end

  def record_invalid_rescue e
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end
end
