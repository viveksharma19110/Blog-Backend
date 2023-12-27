const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT;

//middleware to parse json request body
app.use(express.json());


const blog = require('./routes/blog');

// mount 
app.use("/api/v1",blog);

const dbConnect = require('./config/database');
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is my HOMEPAGE</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});