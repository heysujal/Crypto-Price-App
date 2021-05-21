const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", async (req, res) => {
  var dataArray;

  try {
    const res = await fetch("https://api.wazirx.com/api/v2/tickers");

    dataArray = await res.json();
  } catch (err) {
    console.log(err.message);
  }

  res.render("home", { dataArray });
});

 

app.listen(process.env.PORT||3000, function () {
  console.log("Server started");
});
