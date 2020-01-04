import React, { useState, useEffect } from 'react'

export default function List () {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(30);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <div>
        <div>List</div>
        <div>You clicked {count} times</div>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
      <div>
        <div>List</div>
        <div>You clicked {age} times</div>
        <button onClick={() => setAge(age + 1)}>Click</button>
      </div>
    </div>
  )
}