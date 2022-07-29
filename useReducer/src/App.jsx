import React, { useReducer } from "react";
export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "textInput":
        return { ...state, text: action.payload };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, text: "" });
  return (
    <div>
      <input
        type="text"
        value={state.text}
        onChange={(e) => {
          dispatch({ type: "textInput", payload: e.target.value });
        }}
        className="border"
      />
      <p>{state.count}</p>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        disabled={state.count == 1}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <p>{state.text}</p>
    </div>
  );
}
