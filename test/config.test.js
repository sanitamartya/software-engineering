const test = require("node:test");
const assert = require("node:assert/strict");
const config = require("../src/config");

test("uses the default port when PORT is not set", () => {
  assert.equal(config.port, 3000);
});

test("exports a valid port number", () => {
  assert.equal(Number.isInteger(config.port), true);
  assert.ok(config.port >= 1 && config.port <= 65535);
});
