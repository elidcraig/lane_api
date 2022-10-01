class ReservationsController < ApplicationController
  before_action :current_user

  def create
    render json: @current_user.reservations.create!(reservation_params), status: 201
  end

  def update
    res = find_reservation
    res.update!(reservation_params)
    render json: res, status: 200
  end

  def destroy
    find_reservation.destroy
    head :no_content
  end

  private

  def reservation_params
    params.permit(
      :start_date,
      :end_date,
      :vehicle_id,
    )
  end

  def find_reservation
    @current_user.reservations.find(params[:id])
  end
end
