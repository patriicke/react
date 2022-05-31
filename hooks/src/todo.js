import React from "react";
import { useState } from "react";

function Todo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  function increment() {
    setCount((c) => {
      return c + 1;
    });
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Create a new todo</button>
          <h1>My todos</h1>
          {
              todos.map((todo, index) => {
                  return <p key={index}>{todo}</p>
              })
          }
    </div>
  );
}
export default Todo;
