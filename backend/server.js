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
    methods:["POST","GET]
    origin: ["https://code-verification-frontend.vercel.app"],
  })
);
app.use(bodyParser.json());

app.use("/api", verifyRoute);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://code-verification-frontend.vercel.app');  // Specific origin
  res.setHeader('Access-Control-Allow-Credentials', 'true');  // Allow credentials
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
