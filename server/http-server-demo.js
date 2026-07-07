const http = require("http");

const server = http.createServer((req, res) => {

    res.write("Hello from Pure Node.js!");

    res.end();

});

server.listen(4000, () => {

    console.log("HTTP Server running on http://localhost:4000");

});