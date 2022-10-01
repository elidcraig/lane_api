class VehiclesController < ApplicationController
  def index
    render json: Vehicle.all, include: :user
  end
end
