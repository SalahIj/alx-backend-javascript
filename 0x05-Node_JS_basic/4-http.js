const http = require('http');

/**
 * hhh
 * @module 4-http
 */

/**
 * aaa
 * @param {http.IncomingMessage} req The .
 * @param {http.ServerResponse} res .
 */
const handleRequest = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
};

const app = http.createServer(handleRequest);
app.listen(1245);
module.exports = app;
