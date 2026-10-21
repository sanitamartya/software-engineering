const app = require("./app");

const port = Number(process.env.PORT) || 3000;

const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

module.exports = server;
