class Api::V1::DaysController < ApplicationController
  before_action :set_day, only: [:show, :update, :destroy]

  def index
    if logged_in?
      @days = current_user.days
      options = {}
      options[:include] = [:entries]
      render json: DaySerializer.new(@days, options)
    else
      render json: {
        error: "Please Sign-Up or Log-In"
      }
    end
  end

  def show
    if logged_in?
      options = {}
      options[:include] = [:entries]
      render json: DaySerializer.new(@day, options)
    else
      render json: {
        error: "Please Sign-Up or Log-In"
      }
    end
  end

  def create
    @day = current_user.days.build(day_params)
    if @day.save
      render json: DaySerializer.new(@day), status: :created
    else
    #  resp = {
    #    error: @day.errors.full_messages.to_sentence
    #  }
      @day = Day.where(date: params[:date])[0]
      options = {}
      options[:include] = [:entries]
      render json: DaySerializer.new(@day, options), status: :ok
      #render json: resp, status: :unprocessable_entity
    end
  end

  def update
    if @day.update(day_params)
      options = {}
      options[:include] = [:entries]
      render json: DaySerializer.new(@day, options), status: :ok
    else
      resp = {
        error: @day.errors.full_messages.to_sentence
      }
      render json: resp, status: :unprocessable_entity
    end
  end

  def destroy
    if @day.destroy
      render json: { data: "Day deleted!" }, status: :ok
    else
      error_resp = {
        error: "Day not found!"
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
