const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const verifyRoute = require("./routes/verifyRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT_NO || 3000;

app.use(
  cors({
    credentials: true,
    origin: ["https://verification-rlxl.vercel.app"],
    methods: ["POST", "GET"],
  })
);
app.use(bodyParser.json());

app.use("/api", verifyRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.options("/api/verify", (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://verification-rlxl.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
