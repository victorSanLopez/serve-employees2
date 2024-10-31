import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));

const sampleEmployee = {
	name: {
		first: "Barbara",
		last: "Cooper",
	},
	email: "barbara.cooper@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
	},
};

app.get("/api/employees", (_req, res) => {
	res.json({ results: [sampleEmployee] });
});

const port = 3310;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
