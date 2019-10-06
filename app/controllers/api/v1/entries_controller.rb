class Api::V1::EntriesController < ApplicationController
  before_action :set_entry, only: [:show, :update, :destroy]
  before_action :set_day, only: [:index, :create, :destroy]

  def index
    if logged_in?
      @entries = @day.entries
      render json: EntrySerializer.new(@entries)
    else
      render json: {
        error: "Please Sign-Up or Log-In"
      }
    end
  end

  def show
    render json: @entry
  end

  def create
    @entry = @day.entries.build(entry_params)
    if @entry.save
      options = {}
      options[:include] = [:entries]
      render json: DaySerializer.new(@day, options), status: :created
    else
      resp = {
        error: @entry.errors.full_messages.to_sentence
      }
      render json: resp, status: :unprocessable_entity
    end
  end

  def update
    if @entry.update(day_params)
      render json: EntrySerializer.new(@entry), status: :ok
    else
      resp = {
        error: @entry.errors.full_messages.to_sentence
      }
      render json: resp, status: :unprocessable_entity
    end
  end

  def destroy
    if @entry.destroy
      options = {}
      options[:include] = [:entries]
      render json: DaySerializer.new(@day, options), status: :ok
    else
      resp = {
        error: "Entry not found!"
      }
      render json: resp, status: :unprocessable_entity
    end
  end

  private
    def set_entry
      @day = Entry.find(params[:id])
    end

    def set_day
      @day = Day.find(params[:day_id])
    end

    def entry_params
      params.require(:entry).permit(:calories, :net_carbs, :protein, :fat, :day_id)
    end
end
