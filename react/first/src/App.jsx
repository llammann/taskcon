import { useState } from "react";
import Students from "./students";
import Employee from "./employee";
function App() {
  return (
    <>
      <Students />
      <h1>Employee</h1>
      <Employee />
    </>
  );
}

export default App;
