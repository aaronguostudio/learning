// setup_mongo.js

db.dropUser('someuser');

db.createUser({
  user: 'someuser',
  pwd: 'password',
  roles: [ 'readWrite' ]
});

db.table1.createIndex({ 'approver-list.approver-user-id': 1 });
db.table1.createIndex({ 'condition.document-field-id': 1 });
db.table1.createIndex({ 'condition.comparison-operator-id': 1 });

db.table2.createIndex({ 'coder-user-id': 1 });
db.table2.createIndex({ 'condition.document-field-id': 1 });
db.table2.createIndex({ 'condition.comparison-operator-id': 1 });

db.table3.createIndex({ 'tenant-id': 1 });
