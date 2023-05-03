// #region Imports
const express = require("express");
const path = require("path");
const { print, success, notfound, unauth } = require("./exports");
const { logTime } = require("./exports");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch-commonjs");
const fs = require("fs");
// #endregion

// #region Server config
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const APIKEY = process.env.APIKEY;
logTime();
// #endregion

// #region Redirect sensitive files to home page
app.get("/profiles.json", (req, res) => {
	res.redirect(301, '/');
});

app.get("/pages/homepage.html", (req, res) => {
	res.redirect(301, '/');
});

app.get("/pages/premium.html", (req, res) => {
	res.redirect(301, '/');
});

app.get("/pages/about.html", (req, res) => {
	res.redirect(301, '/');
});

app.get("/pages/privacy.html", (req, res) => {
	res.redirect(301, '/');
});

app.get("/pages/terms.html", (req, res) => {
	res.redirect(301, '/');
});

app.get("/pages/delete.html", (req, res) => {
	res.redirect(301, '/');
});

app.get("/index.js", (req, res) => {
	res.redirect(301, '/');
});

app.get("/backup.js", (req, res) => {
	res.redirect(301, '/');
});

app.get("/exports.js", (req, res) => {
	res.redirect(301, '/');
});

app.get("/pages.js", (req, res) => {
	res.redirect(301, '/');
});

app.get("/pages/404.html", (req, res) => {
	res.redirect(301, '/');
});
// #endregion

// #region Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, ".")));
app.use(express.static("."));
app.use("/static", express.static(path.join(__dirname, ".")));
// #endregion

// #region Website pages
(() => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "./pages/homepage.html"));
	});

	app.get("/about", (req, res) => {
		res.sendFile(path.join(__dirname, "./pages/about.html"));
	});

	app.get("/premium", (req, res) => {
		res.sendFile(path.join(__dirname, "./pages/premium.html"));
	});

	app.get("/apply", (req, res) => {
		res.send(applyPage);
	});

	app.get("/terms", (req, res) => {
		res.sendFile(path.join(__dirname, './pages/terms.html'));
	});

	app.get("/privacy", (req, res) => {
		res.sendFile(path.join(__dirname, './pages/privacy.html'));
	});

	app.get("/delete", (req, res) => {
		res.sendFile(path.join(__dirname, './pages/delete.html'));
	});
})();
// #endregion

// #region API Profiles
app.get("/api/profiles", (req, res) => {
	const file = fs.readFileSync('./profiles.json', 'utf-8');
	const parsed = JSON.parse(file);
	success(res, { status: 200, data: parsed });
}); // GET all users

app.get("/api/profiles/:id", (req, res) => {
	// Locate user
	const { id } = req.params;
	console.log(id);

	const file = fs.readFileSync("./profiles.json", "utf-8");
	const parsed = JSON.parse(file);
	const prof = parsed["profiles"];
	let user = {};
	let found = false;

	for (let i = 0; i < prof.length; i++) {
		for (const [key, value] of Object.entries(prof[i])) {
			if (id == key) {
				user = prof[i];
				found = true;
			}
		}
	}
	// Check if user exists
	if (!found)
		notfound(res, { status: 404, data: "User with this id not found!" });

	success(res, { status: 200, data: [user] });
}); // GET single user

app.post("/api/profiles", (req, res) => {
	console.log(req.body);

	// Authenticate request
	if (req.headers['x-api-key'] == APIKEY) {
		const user = JSON.stringify(req.body);

		const file = fs.readFileSync("./profiles.json", "utf-8");
		const parsed = JSON.parse(file);
		parsed["profiles"].push(req.body);

		fs.writeFileSync("./profiles.json", JSON.stringify(parsed, null, 4));

		success(res, {
			status: 200,
			data: { addedUser: JSON.parse(user) },
		});
	} else {
		unauth(res, { status: 401, data: "Unauthorized to make this request." });
	}
}); // POST create user
// #endregion

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, './pages/404.html'));
});

app.listen(port, (e) => (e ? print(`Error ${e}`) : print(`Running on port ${port}`)));