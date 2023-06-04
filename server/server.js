require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "XLSHIRT" }],
  [2, { priceInCents: 20000, name: "LSHIRT" }],
]);

app.listen(3000);
