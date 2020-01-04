var conn = new Mongo();
db = conn.getDB('demo2');

var data = db.getCollection('users').find();

var users = [
  {
    name:'Aaron'
  },
  {
    name: 'Bob'
  },
  {
    name: 'Cindy'
  }
]

db.getCollection('users').save(users)

while(data.hasNext()) {
  printjson(data.next())
}