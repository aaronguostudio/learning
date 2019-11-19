# API Gateway

## Caching Setup

- The default TTL is 300 seconds, the maximum TTL value is 3600 seconds, TTL=0 means disabled.
- The maximum size of a response that can be cached is 1048576 bytes (1MB).
- Only GET methods have caching enabled by default.
- I can enable cache for the whole stage, or just enable the cache for specific methods

## Versioning and Aliases

- [TODO](https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html)
