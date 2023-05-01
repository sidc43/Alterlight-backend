// Region API STOCKS
let ResArr = [];

// Stocks v2
app.get("/api/stocksv2/name/:name", async (req, res) => {
	const URL = "https://query1.finance.yahoo.com/v1/finance/search?q=";
	const { name } = req.params;
	console.log(name);

	const response = await fetch(URL + name);
	const data = await response.json();
	console.log(data);
	res.send(data);
});

app.get("/api/stocksv2/quote/:ticker", async (req, res) => {
	const URL = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=";
	const { ticker } = req.params;
	console.log(ticker);

	const response = await fetch(
		"https://query1.finance.yahoo.com/v7/finance/quote?symbols=" + ticker
	);
	const data = await response.json();
	console.log(data);

	const quote = data["quoteResponse"]["result"][0];

	const { regularMarketChangePercent, regularMarketPrice, trailingPE } = quote;
	const {
		trailingAnnualDividendYield,
		epsTrailingTwelveMonths,
		regularMarketChange,
	} = quote;

	const resObject = {
		price: regularMarketPrice,
		changepercent: regularMarketChangePercent,
		change: regularMarketChange,
		PERatio: trailingPE,
		dividendYield: trailingAnnualDividendYield,
		eps: epsTrailingTwelveMonths,
	};

	res.send(resObject);
});

app.get("/api/stocks/name/:name", async (req, res) => {
	const apikey = "ce8d60609c822e4e663934830c75e0eb";
	const baseURL = "https://financialmodelingprep.com/api/v3";
	const { name } = req.params;
	console.log(name);

	let stockobj;
	const r = await fetch(
		baseURL +
		`/search-name?query=${name}&limit=10&exchange=NASDAQ&apikey=${apikey}`
	);
	const data = await r.json();

	for (let i = 0; i < data.length; i++) {
		stockobj = {
			CompanyName: data[i].name,
			StockSymbol: data[i].symbol,
		};
		ResArr.push(stockobj);
	}
	for (let i = 0; i < ResArr.length; i++) {
		console.log(
			`${i + 1} - ${ResArr[i].CompanyName} (${ResArr[i].StockSymbol})`
		);
	}

	console.log(ResArr);
	res.send(ResArr);
	ResArr = [];
});

app.get("/api/stocks/score/:ticker", async (req, res) => {
	const apikey = "ce8d60609c822e4e663934830c75e0eb";
	const { ticker } = req.params;

	const r = await fetch(
		`https://financialmodelingprep.com/api/v3/ratios-ttm/${ticker}?apikey=${apikey}`
	);
	const data = await r.json();

	const r2 = await fetch(
		`https://financialmodelingprep.com/api/v3/quote-short/${ticker}?apikey=${apikey}`
	);
	const data2 = await r2.json();
	console.log(data2);
	const { price } = data2[0];

	console.log(data[0]);
	const {
		dividendYielPercentageTTM,
		peRatioTTM,
		dividendYieldTTM,
		dividendPerShareTTM,
	} = data[0];
	const response = {
		ticker: ticker,
		price: price,
		dividendYieldPer: dividendYielPercentageTTM,
		PeRatio: peRatioTTM,
		dividendYield: dividendYieldTTM,
		dividendPerShare: dividendPerShareTTM,
	};
	res.send(response);
});
// Endregion