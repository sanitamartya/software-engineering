const test = require("node:test");
const assert = require("node:assert/strict");
const { sumNumbers } = require("../src/number-utils");

test("sums an array of numbers", () => {
  assert.equal(sumNumbers([10, 20, 30]), 60);
});

test("returns zero for an empty array", () => {
  assert.equal(sumNumbers([]), 0);
});

test("rejects non-array input", () => {
  assert.throws(() => sumNumbers("10,20"), TypeError);
});

test("rejects non-number array elements", () => {
  assert.throws(() => sumNumbers([10, "20"]), TypeError);
});
