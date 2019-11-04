# Redius Readme

```bash

# run server
redis-server

# connect to server
redis-cli

# operation
set a 111
get a

setex b 10 1 # expires after 10 seconds
get b

set session:sessionId 123
get session:sessionId

KEYS * # find all keys

DEL a

```
