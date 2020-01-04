#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', (err, conn) => {
  if (err) console.log('>', err);
  conn.createChannel((err, ch) => {
    if (err) console.log('>', err);
    let q = 'hello';
    ch.assertQueue(q, { durable: false });
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, (msg) => {
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  })
})
