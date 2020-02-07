# Learning resources

## Context

Use as a global variables, pass props cross all of the components

### Pros & cons

- Pros
  - Pass props cross all of the components
- Cons
  - Using global dependencies which make the component not pure

### Tips

- Don't use more than context is a good choice
- useCentext makes it's easier and can create multiple context

## Lazy, Suspense and ErrorBoundary

## Memo & useMemo

### Memo

- memo is used for optimizing a component
- We can optimize react render process by defining compoenntShouldUpdate or extends from pureComponent
  - The problem with pureComponent
    - But pureComponent won't do deep compare for the object's fields
    - If we pass a inline function as props, it's still update, because the inline function is a new one everytime parent rendered
  - We can solve it by: not use the inline function, define as an arrow function in the parent (arrow function here likes instaniate a function on the parent, that's why it won't rerender, it's a static field)
- A better solution
  - Use a functional component
  - Wrap by memo
  - It has the similar issue as pureComponent
    - Can create a new object and replace with the new one
    - Can use memo(Component, areEqual), areEqual is a function we can define, it's similar to shoudComponentUpdate
  - use useMemo or useCallback to wrap the function passed in as a parameter
    - useMemo(() => fn) === useCallback(fn)
    - userMemo(() => { return () => {...} }, [])
    - useCallback(() => { ... }, [])

### useMemo

- useMemo is used for optimizing a function
- useMemo is happending during the rendering

### Context type

- Context type makes the syntax looks better
  - use: static contextType = MyContext; const myContext = this.context

## Hooks

- The problem with class component
  - Hard to reuse
    - Can be solved by
      - render props
      - HOC
    - But it addes more wrappered components
  - life cycle makes the logic complex, need to maintain the code that not related to the logic
  - has the make sure this is pointing correct
- Advantages for hooks
  - no this
  - reuse the logic in hook
  - seperate concern for side effect
- Eslint plugin
  - eslint-plugin-react-hooks

### useState

- pass a function to useState(() => {}) can delay the initial process, good to optimize loading speed when the initial process is complex

### effectHooks

- useEffect will be invoked after render
  - first time it behaves like componentDidMount
  - following times behave like cmoponentDidUpdate
  - return function will clean callback like componentWillUnmount

## Redux

- Priciples
  - Single source of truth
  - no mutation
  - fure function

## About React 17

- [Resource](https://blog.logrocket.com/what-to-expect-in-react-v17/)
- new lifecycle methods
  - getDerivedStateFromProps
    - replace
      - componentWillUpdate (remove and replace by shouldComponentUpdate and getDerivedStateFromProps)
      - componentWillReceiveProps
      - componentWillMount
  - getSnapShotBeforeUpdate
- new focus
  - Concurrent Mode
    - Suspense

## More about react

- Features
  - virtual dom
  - ssr
  - one-way data binding

## Resources

- [TypeScript](https://github.com/piotrwitek/react-redux-typescript-guide)
- [Good discussion between Redux and Context](https://dev.to/ibrahima92/redux-vs-react-context-which-one-should-you-choose-2hhh)
