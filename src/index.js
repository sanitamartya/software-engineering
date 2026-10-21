const app = require("./app");
const config = require("./config");

const server = app.listen(config.port, () => {
  console.log(`Server listening on http://localhost:${config.port}`);
});

module.exports = server;
