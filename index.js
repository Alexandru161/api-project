const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 400 },
  { id: 4, name: "Headphones", price: 150 },
  { id: 5, name: "Keyboard", price: 80 },
  { id: 6, name: "Mouse", price: 50 },
  { id: 7, name: "Monitor", price: 300 },
  { id: 8, name: "Smartwatch", price: 200 },
  { id: 9, name: "Printer", price: 250 },
  { id: 10, name: "Camera", price: 500 }
];


app.get("/list", (req, res) => {
  res.json(products);
});


app.get("/details/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json(product);
});

app.listen(PORT, () =>
  console.log(`Server running `)
);
