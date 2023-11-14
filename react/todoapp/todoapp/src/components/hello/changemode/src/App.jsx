import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Mode from "./components/Mode";
import IncreaseBtn from "./components/increaseBtn";
import DecreaseBtn from "./components/decreaseBtn";
import ResetBtn from "./components/resetBtn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DecreaseBtn />
      <Counter />
      <IncreaseBtn />
      <ResetBtn />
      <Mode />
    </>
  );
}

export default App;
