const express = require('express');
const { resolve } = require('path');
const cors = require ('cors');

const app = express();
const port = 3010;

app.use(express.static('static'));


app.use(cors());

const data = [
  {
    id: 1,
    name: 'product 1',
    description: 'description producto 1',
    price: 1000,
  },
  {
    id: 2,
    name: 'product 2',
    description: 'description producto 2',
    price: 2000,
  },
  {
    id: 3,
    name: 'product 3',
    description: 'description producto 3',
    price: 3000,
  },
  {
    id: 4,
    name: 'product 4',
    description: 'description producto 4 miau',
    price: 31000,
  },
  {
    id: 2,
    name: 'product 5',
    description: 'description producto 5',
    price: 6000,
  },
  {
    id: 6,
    name: 'product 6',
    description: 'description producto 36',
    price: 36000,
  },
];

app.get('/products', (req, res) => {
  console.log(data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
