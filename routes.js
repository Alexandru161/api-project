const express = require("express");
const router = express.Router();
const uppercaseQuery = require("./middleware/uppercase");

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

// GET /list
router.get("/list", (req, res) => {
  res.json(products);
});

// GET /details/:id
router.get("/details/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json(product);
});

// GET /search?name=...
router.get("/search", uppercaseQuery, (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ error: "Trebuie să specifici ?name=" });
  }

  const results = products.filter(p =>
    p.name.toUpperCase().includes(name)   // comparăm cu majuscule
  );

  res.json(results);
});

module.exports = router;
