const http = require("http");
const data = require("./fake_data");

const PORT = process.env.PORT;

function requestHandler(req, res) {
  let status;
  let content;
  const { url } = req;
  const urlValues = decodeURI(url).split("/");
  urlValues.shift();

  let gatheredData = {};

  if (urlValues[0] == "movie") {
    switch (urlValues[1]) {
      case "suggestion":
        const stringToSearch = urlValues[2].toUpperCase();

        gatheredData = data.filter(singleVal => {
          return singleVal.title.toUpperCase().includes(stringToSearch);
        });
        content = { movies: gatheredData, message: "Ok" };
        status = 200;
        break;
      case "name":
        const titleToSearch = urlValues[2].toUpperCase();
        gatheredData = data.filter(singleVal => {
          return singleVal.title.toUpperCase() === titleToSearch;
        });
        content = { movies: gatheredData, message: "Ok" };
        status = 200;
        break;
      default:
        content = { message: "Not found" };
        status = "200";
        break;
    }
  } else {
    status = "404";
    content = { message: "Not found" };
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.writeHead(status);
  res.end(JSON.stringify(content), "utf-8");
}

http.createServer(requestHandler).listen(PORT, err => {
  if (err) {
    console.log("something bad happened", err);
    return;
  }
  console.log(`server is listening on port: ${PORT}`);
});
