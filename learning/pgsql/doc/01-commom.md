createdb dbname

partition
- https://blog.heroku.com/handling-very-large-tables-in-postgres-using-partitioning

postgres connection issue
- https://stackoverflow.com/questions/17800249/postgres-db-not-starting-on-mac-osx-error-says-connections-on-unix-domain-sock
- I had the same problem today on Mac Sierra. In Mac Sierra you can find postmaster.pid inside /Users/<user_name>/Library/Application Support/Postgres/var-9.6. Delete postmaster.pid and problem will be fixed.
