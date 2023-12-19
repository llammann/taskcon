const express = require("express");
const app = express();
const data = require("./db.json");

app.get("/", function (req, res) {
  res.send("Hallo");
});

// get all products
app.get("/products", function (req, res) {
  //   console.log("res", res);
  let filteredData = data.products;
  console.log("data: ", filteredData);

  if (!req.query) {
    res.send(data.products);
  }
  if (req.query.name) {
    filteredData = filteredData.filter((elem) => {
      return elem.name.toLowerCase().includes(req.query.name.toLowerCase());
    });
    console.log("test: ", filteredData);
  }
  if (req.query.price) {
    filteredData = filteredData.filter(
      (elem) => +elem.price === +req.query.price
    );
  }
  if (req.query.discountPercentage) {
    filteredData = filteredData.filter(
      (elem) => +elem.discountPercentage === +req.query.discountPercentage
    );
  }

  res.send(filteredData);
});

// get product by id
app.get("/products/:id", function (req, res) {
  const id = req.params.id;
  const prod = data.products.find((elem) => (elem.id = id));
  res.send(prod);
});

// // get product by name
// app.get("/products/:id", function (req, res) {
//     const id = req.params.id;
//     const prod = data.products.find((elem) => (elem.id = id));
//     res.send(prod);
//   });

app.listen(3000, () => {
  console.log("app listening");
});
