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
    origin: ["https://verification-8rak.vercel.app"],
    methods: ["POST", "GET", "OPTIONS"],
  })
);
app.use(bodyParser.json());

app.use("/api", verifyRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://verification-8rak.vercel.app"
  );
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
