# Scan
- Scan is less efficient than other operations
- Scan will search the entire table or index
- Avoid using it for large table, it's slow
- The filter will be applied after the entire table has been scanned, that's why it's slow and very cost

# Query
- Query needs a partition key, it means that I only query a part of items in a table