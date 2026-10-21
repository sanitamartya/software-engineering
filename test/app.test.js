const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/app");

test("GET /health returns 200 and healthy status", async () => {
  const response = await request(app).get("/health");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { status: "ok" });
  assert.match(response.headers["content-type"], /application\/json/);
});

test("unknown routes return 404", async () => {
  const response = await request(app).get("/unknown");

  assert.equal(response.status, 404);
  assert.deepEqual(response.body, { error: "Not Found" });
});
