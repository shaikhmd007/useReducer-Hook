import "./styles.css";
import { useReducer } from "react";

let initiatialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "less":
      return state - 1;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, initiatialstate);

  return (
    <div className="App">
      <h1>UseReducer Hook Concept</h1>
      <button onClick={() => dispatch("add")}>+</button>
      <button onClick={() => dispatch("less")}>-</button>
      <h1>{count}</h1>
    </div>
  );
}
