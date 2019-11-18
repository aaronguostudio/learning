# Heroku

## Review app

- when promote staging app to production, it would trigger a rebuild. So it the production doesn't involve a build process, promotion function is a fast and simple solution. But if build process is required, using a build pipeline is a better idea. I can either use a heroku build-in build process (can be triggered by auto deployment), or I can setup a CI/CD pipeline.

## Issues

- heroku build will run build (or heorku-postbuild) script, but quasar couldn't build the UI it correct
  - The reason is that heroku didn't install dev dependencies, quasar needs those dependencies. Heroku mentions that their installation includes dev dependencies, I didn't dig into it, a quick fix is move all dev dependencies to dependencies.
