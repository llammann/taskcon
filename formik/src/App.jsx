import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tablex from "./components/Tablex";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";
import CategoryDetail from "./pages/CategoryDetail";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://6554d83163cafc694fe7163f.mockapi.io/category").then(
      (res) => {
        console.log(res.data);
        setData(res.data);
      }
    );
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" >
            <Route index element={<Categories data={data}/>}/>
            <Route path="add" element={<AddCategory />} />
            <Route path=":id" element={<CategoryDetail />} />
          </Route>

          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
