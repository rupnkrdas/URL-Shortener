const express = require("express");
const URLRoute = require("./routes/url");
const connectToMongoDB = require("./connection");
const URL = require("./models/url");

const app = express();
const PORT = 8001;

// Connection to database
connectToMongoDB("mongodb://localhost:27017/url-shortener")
	.then(() => console.log("Connected to MongoDB database succesfully!"))
	.catch((err) => console.log(`Error: ${err}`));

app.use(express.json());

app.use("/url", URLRoute);

app.get("/:shortId", async (req, res) => {
	const shortId = req.params.shortId;
	const entry = await URL.findOneAndUpdate(
		{ shortId },
		{
			$push: {
				visitHistory: {
					timestamp: Date.now(),
				},
			},
		}
	);

	res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
