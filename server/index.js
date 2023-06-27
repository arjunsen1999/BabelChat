require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const { connection } = require("./config/db");

//All Routes import here

// Global Middleware
app.use(express.json());
app.use(cors());

// All Routes

// if Routes are not exists

// Error handling middleware

// listening server and connection
app.listen(PORT, () => {
    connection();
  console.log({ server: `http://localhost:${PORT}` });
});
