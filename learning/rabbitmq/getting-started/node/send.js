#!/usr/bin/env node
var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', (err, conn) => {
  if (err) console.log('>', err);
  conn.createChannel((err, ch) => {
    if (err) console.log('>', err);
    let q = 'hello';
    ch.assertQueue(q, { durable: false });
    ch.sendToQueue(q, new Buffer('Hello World from node'));
    console.log("> Sent 'Hello World")
  })
  setTimeout(() => { conn.close(); process.exit(0) }, 500);
})