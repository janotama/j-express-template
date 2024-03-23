const express = require("express");

const app = express();

require("dotenv").config();

// Import routes
const routes = require("./src/routes");

app.use(express.json());

// Use routes
app.use("/api/v1", routes);

const PORT = process.env.PORT || 3222;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
