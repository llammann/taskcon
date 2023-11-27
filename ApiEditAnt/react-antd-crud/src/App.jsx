import "./App.css";
import Tablex from "./Tablex";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      // console.log(res.data)
      setData(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="Header">Suppliers</h1>
      <Tablex data={data} setData={setData} />
    </>
  );
}

export default App;
