const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
var cors = require("cors");
const router = require("./src/routes/ZingRouter");

const port = process.env.PORT || 3000;

// Page Home
app.use(cors());
app.get("/", (req, res) => {
  res.send("SERVER ON");
});

// ZingMp3Router
app.use("/api", router);

// Page Error
app.get("*", (req, res) => {
  res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<");
});

app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`);
});
