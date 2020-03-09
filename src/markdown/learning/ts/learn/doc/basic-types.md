# Typescript

## Typescript has 12 basic types

- primitives
  - boolean
  - number
  - string
  - null
  - undefined
- array
- tuple
- enum
- void
- never
  - represents unreachable code
- object
  - represents for non-primitive types
- any

## Type assertion

```ts
// I know it will behave like a string
let strLength: number = (<string>someValue).length
let strLength: number = (someValue as string).length
```

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

// readonly interface
interface user = {
  readonly name: string
  readonly age: number
}

// readonly array
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

let user1: user = { name: 'Aaron', age: 31 }
```
