const express = require("express");
const {
	handleGenerateShortURL,
	handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

// POST
router.post("/", handleGenerateShortURL);

// GET /analytics/:id
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
