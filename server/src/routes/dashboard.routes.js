const express = require("express");

const { getDashboard } = require("../controllers/dashboard.controller");
const { authenticateUser } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", authenticateUser, getDashboard);

module.exports = router;
