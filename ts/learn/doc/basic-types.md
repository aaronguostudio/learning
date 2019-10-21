# Typescript has 12 basic types

## Types

- boolean
- number
- string
- array
- tuple
- enum
- any
- void
- null
- undefined
- never
- object

## Interface

- interface can be extended

```ts
interface simpleTodo = {
  name: string,
  complete: boolean
}

interface complexTodo extends simpleTodo {
  color: stirng,
  tags: string[]
}
```
