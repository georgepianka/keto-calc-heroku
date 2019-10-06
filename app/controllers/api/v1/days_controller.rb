class Api::V1::DaysController < ApplicationController
  before_action :set_day, only: [:show, :update, :destroy]

  def index
    if logged_in?
      @days = current_user.days
      render json: DaySerializer.new(@days)
    else
      render json: {
        error: "Please Sign-Up or Log-In"
      }
    end
  end

  def show
    render json: @day
  end

  def create
    @day = current_user.days.build(day_params)
    if @day.save
      render json: DaysSerializer.new(@day), status: :created
    else
      resp = {
        error: @day.errors.full_messages.to_sentence
      }
      render json: resp, status: :unprocessable_entity
    end
  end

  def update
    if @day.update(day_params)
      render json: DaySerializer.new(@day), status: :ok
    else
      render json: @day.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @day.destroy
      render json: { data: "day deleted from favs" }, status: :ok
    else
      error_resp = {
        error: "day not found"
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  private
    def set_day
      @day = Day.find(params[:id])
    end

    def day_params
      params.require(:day).permit(:date, :weight, :user_id)
    end
end
