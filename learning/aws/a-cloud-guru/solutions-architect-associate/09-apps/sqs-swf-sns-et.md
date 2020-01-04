# SQS

## Types

- Standard Queues (Default)
  - Try the best effort to deliever in order (no garantee)
  - deliever at least once
  - no transactions per second limit
- FIFO Queues (first in first out)
  - ordered
  - one-time processing
  - FIFO also support message groups that allow multiple ordered message groups within a single queue
  - limited to 300 transactions per second

## Exam tips

- SQS is pull based, not pushed based
- messages are 256KB, can upgrade to 2GB using S3
- messages defualt retention period is 4 days, can configure from 1min to 45 days
- Visibility timeout
  - a reader reads a message, the message will become to invisible. But if the reader doesn't process it or timeout, the message will be visible again and waiting for another reader
  - visibility maximum timeout is 12 hours
- long polling
  - if empty will keep the connection until there is one comes
- SQS is a way to de-couple infrastructure

## SWF

- SWF presents a task-oriented API, whereas SQS offers a message-oriented API
- AWS is using it in their Data warehouse
- SWF has human interaction with digital parts
- SWF executions can last up to 1 year
- never duplicate
- keeps track of all the tasks and events

## SWF Actors

- Workflow Starters - An app that can initiate a workflow
- Deciders - Control the flow of activity tasks in a workflow execution. If a task finished or failed, decider decides what to do next
- Activity workers - carry out activity tasks

## SNS

- push based

## SNS VS SQS

- SNS push
- SQS pull

## Elastic Transcoder

- S3 -> Lambda -> ET -> S3
