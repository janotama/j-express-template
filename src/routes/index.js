const express = require("express");

const router = express.Router();

const authRoute = require("./auth.route");
const healthRoute = require("./health.route");

router.use("/auth", authRoute);
router.use("/health", healthRoute);

module.exports = router;
