const express = require("express");

const router = express.Router();

router.get("/check", (req, res) => {
  res.json({
    message: "Server is running",
    statusCode: 200,
  });
});

module.exports = router;
