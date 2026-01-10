const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log("Server is running on http://127.0.0.1:" + PORT);
});
