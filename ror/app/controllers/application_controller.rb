class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_rescue
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_rescue

    def index
        
    end

    private

    def record_not_found_rescue e
        render json: { error: e.message }, status: :not_found
    end

    def record_invalid_rescue e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
end
