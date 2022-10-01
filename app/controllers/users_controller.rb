class UsersController < ApplicationController
  before_action :current_user, only: :show

  def show
    if session[:user_id]
      render json: @current_user, include: [:reservations => {include: :vehicle}]
    else
      render json: { errors: ['Problem finding logged in user'] }, status: 401
    end
  end

  def create
    new_user = User.create! user_params
    session[:user_id] = new_user.id
    render json: new_user, include: [:reservations => {include: :vehicle}], status: 201
  end

  private

  def user_params
    params.permit(
      :username,
      :password,
      :password_confirmation,
      :profile_image_url
    )
  end
end
