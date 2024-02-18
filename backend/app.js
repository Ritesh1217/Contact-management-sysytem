require ("dotenv").config({ path: "./config.env"});
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const connectDB = require("./config/db");

// const auth = require("./middlewares/auth");

const app = express();



// middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(require("cors")());

// routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));


// Root path route handler
app.get("/", (req, res) => {
  res.send("Welcome to the root path!");
});


app.use((req, res, next) => {
  res.status(404).send("Sorry, the requested resource was not found.");
});


// server configurations.
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connectDB();
  console.log(`server listening on port: ${PORT}`);
});


