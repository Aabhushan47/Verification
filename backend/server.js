const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const verifyRoute = require("./routes/verifyRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT_NO || 3000;

// app.use(
//   cors({
//     credentials: true,
//     origin: ["*"],
//   })
// );

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend's URL
    credentials: true, // allow credentials
    methods: ["GET", "POST"], // allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // allowed headers
  })
);

app.use(bodyParser.json());

app.use("/api", verifyRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
