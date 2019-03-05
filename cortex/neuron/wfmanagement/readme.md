# documentEngine

## core
### Start
- uuid() -> healthChecker.start -> 

## health checker server
### start Server
  - /ping
  - /healthcheck
  - /connectivityCheck
  - will check port number, increase if not start
  - call register in wfmanagement -> report to management server every 10 seconds


# wfmanagement
## DB
  - registry
## Endpoints
### engines
  - get get engines
### register
  - record the engine id and timestamp
### unregister
  - delete by engine id
### healthcheck
  -  check if document engine is dead