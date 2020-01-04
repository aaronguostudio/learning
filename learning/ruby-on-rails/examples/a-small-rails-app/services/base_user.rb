module UserServices
  class BaseUser

    # const
    CLIENT_USER = "client_user"

    def call
      # do something
    end

    private

    def queue_jobs
      # or 3rd party library
      OtherClass.queue_job
    end

    def queue_create_or_update_zendesk_user
      CreateOrUpdateZendeskUserJob.perform_later(user: user)
    end

    def validate
      [validate_a, validate_b].all?
    end

    def validate_a
      UserServices::Validations::ValidateA.call(
        params:        params
      )
    end

    def validate_b
      UserServices::Validations::ValidateB.call(
        params:        params
      )
    end
  end
end
