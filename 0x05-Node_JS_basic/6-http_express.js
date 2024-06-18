const express = require('express');

/**
 * ccccc
 * @module
 */
const app = express();

const PORT = 1245;

/**
 * Ssssss
 * @name GET /
 * @function
 * @memberof module:4-http-express
 * @param {Object} req - ss
 * @param {Object} res - ss
 * @returns {undefined}
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Ttttt
 * @type {Object}
 * @memberof module:4-http-express
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
