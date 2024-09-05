const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Connect backend With mongodb database.
mongoose
  .connect(
    "mongodb+srv://ajaybhaimuniya:ajaybhaimuniya2004@e-commerce.zoti0.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce"
  )
  .then(() => {
    console.log("Mongodb Connected Succesfully");
  })
  .catch((error) => {
    console.log(`mongoose Connection Error: ${error.message}`);
  });

//   Express
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
