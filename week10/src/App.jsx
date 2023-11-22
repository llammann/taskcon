import "./App.css";
import { useReducer } from "react";
import Counter from "./components/Counter";
import useFetch from "./hooks/Fetch";

function App() {
  useFetch("https://6549a154e182221f8d51b8a0.mockapi.io/products", get);

  return (
    <>
      <button>Increase</button>
      <span>Count</span>
      <button>Decrease</button>
      <ul>
        {data.map((elem, i) => {
          <li key={i}>{elem}</li>;
        })}
      </ul>
    </>
  );
}
//
export default App;
