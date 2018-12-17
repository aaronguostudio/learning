# Primary Key
Tow kinds of primary keys:

## Partition Key
- Partition key should be unique
- Put the value into a hash function
- The hash function means the physical location of the data

## Partition key and sort key
- Partition key can be the same, same key will be stored in the same location
- Items are sorted by sort key
- Items have the same partition keys should have unique sort key


# Secondary Indexes
- Secondary indexes can also have a partition key and a sort key
- Every index belongs to a table whcih
- Need to define project data, or only key attributes will be added into the indexes

# Table Stream
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html

# Data Types
- Scala Type: Number, String, Binary, Boolean, Null
- Document Type: List, Map
- Set Type

# Read Consistent
Read operations (such as GetItem, Query, and Scan) provide a ConsistentRead parameter. If you set this parameter to true, DynamoDB uses strongly consistent reads during the operation.

## Eventually Consistent Read
- Stale data

## Strongly Consistent Read
- Updated data