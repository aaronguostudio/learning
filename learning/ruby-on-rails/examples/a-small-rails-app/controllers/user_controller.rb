class Api::V1::UserController < Api::ApplicationController

  include Rails.application.routes.url_helpers
  before_action :before_create_hook, only [:create]
  before_action :before_hooks, only [:show, :update]

  def index
    # index
  end

  def show
    # show
  end

  def update
    # update
  end

  private

  def before_create_hook
    # before_create_hook
  end

  def before_hooks
    # before_hooks
  end
end
