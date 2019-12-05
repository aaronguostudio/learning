module UserService

  # I can also inherits from another action
  # to make it more granularity
  class CreateUser < BaseUser
    attr_reader :extra_attr

    def initialize (params: {}, extra_param: nil)
      @params = params
      @extra_attr = params[:some_attr].present?
      extra_param = extra_param

      init(params)
    end

    def call
      return false unless super

      # call will trigger initialize first

      # do somethings

      # this queue comes from the base_class
      queue_jobs
    end

    def init
      @user = User.new(params)
    end
  end
end
