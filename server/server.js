require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.static("../build"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "shirt" }],
  [2, { priceInCents: 20000, name: "shirt" }],
]);

app.listen(3000);
