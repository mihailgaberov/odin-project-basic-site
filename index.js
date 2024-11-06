const http = require("http");
const fs = require("fs");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      const indexHtml = "index.html";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(indexHtml).pipe(res);
      break;
    case "/about":
      const aboutHtml = "about.html";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(aboutHtml).pipe(res);
      break;
    case "/contact":
      const contactHtml = "contact-me.html";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(contactHtml).pipe(res);
      break;
    default:
      const notFoundHtml = "404.html";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(notFoundHtml).pipe(res);
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`🧨 Server is running on http://${host}:${port}`);
});
