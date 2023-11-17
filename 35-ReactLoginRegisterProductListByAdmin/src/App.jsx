import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ReactDOM from "react-dom/client";


import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import { useRef } from "react";
import Login from "./components/Login";
import Tablex from "./components/Table";
import { ChakraProvider, Table } from "@chakra-ui/react";
import Register from "./components/register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLogged, setisLogged] = useState(true);
  const [prod, setProd] = useState(false);

  // Register

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [pass, seyPass] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios("https://6549a154e182221f8d51b8a0.mockapi.io/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    axios("https://6549a154e182221f8d51b8a0.mockapi.io/products").then(
      (res) => {
        // console.log(res.data);
        setProducts(res.data);
      }
    );
  }, []);

  // Disables

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>




      <Login users={users} setUsers={setUsers} />

      <Register users={users} setUsers={setUsers} />

      <Tablex
        products={products}
        setProducts={setProducts}
        users={users}
        setUsers={setUsers}
      />
    </ChakraProvider>
  );
}

export default App;
