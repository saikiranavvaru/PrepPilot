const express = require("express");

const router = express.Router();

const {
    getHome,
    getHealth
} = require("../controllers/index.controller");

router.get("/", getHome);

router.get("/health", getHealth);

module.exports = router;