class Api::TodosController < ApplicationController

  def create
    todo = @current_user.todos.create!(name: params[:name])
    render json: todo, status: :created
  end

  def destroy
    todo = @current_user.todos.find(params[:id])
    todo.destroy
    render head: :no_content
  end

end
