const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let cart = [];

app.get('/cart', (req, res) => {
  res.json(cart);
});

app.post('/cart', (req, res) => {
  const { product } = req.body;
  cart.push(product);
  res.status(201).json(cart);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
