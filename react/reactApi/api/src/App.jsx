import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import axios from "axios";
import Add from "./components/Add";

function App(
  setCategories,
  categories,
  setName,
  name,
  description,
  setDescription
) {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios("https://6549a154e182221f8d51b8a0.mockapi.io/products").then(
      (res) => {
        console.log(res.data);
        setCategories(res.data);
      }
    );
  }, []);

  return (
    <>
      <h1>Products</h1>
      <ul>
        {categories.map((category) => {
          return (
            <li key={uuidv4()}>
              {category.name}

              <button>edit</button>

              <button
                id={category.id}
                onClick={(e) => {
                  console.log(e.target);

                  let arr = [...categories];
                  console.log(e.target.getAttribute("id"));
                  let deleted_arr = arr.filter(
                    (elem) => elem.id != e.target.getAttribute("id")
                  );
                  setCategories(deleted_arr);

                  axios.delete(
                    "https://6549a154e182221f8d51b8a0.mockapi.io/products/" +
                      e.target.getAttribute("id")
                  );
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <Add
        setName={setName}
        setDescription={setDescription}
        name={name}
        description={description}
      />
    </>
  );
}

export default App;
