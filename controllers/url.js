const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateShortURL(req, res) {
	const body = req.body;
	if (!body.url) return res.status(400).json({ error: "URL is required" });
	const shortId = shortid();
	await URL.create({
		shortId,
		redirectURL: body.url,
		visitHistory: [],
	});

	return res.render("home", {
		shortId,
	});
}

async function handleGetAnalytics(req, res) {
	const shortId = req.params.shortId;
	const entry = await URL.findOne({ shortId });

	return res.json({
		totalClicks: entry.visitHistory.length,
		analytics: entry.visitHistory,
	});
}

module.exports = {
	handleGenerateShortURL,
	handleGetAnalytics,
};
