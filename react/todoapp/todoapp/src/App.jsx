import { useState } from "react";
import "./App.css";
import Hello from "./components/hello";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>App</h1>
        <Hello name={"Ilham"} surname={"Aliyev"} age={21} hobbies={["basketball","music"]}/>
        <Hello name={"Murad"} surname={"Mammedov"} age={20} hobbies={["football","videogames"]}/>
    </>
  );
}

export default App;
