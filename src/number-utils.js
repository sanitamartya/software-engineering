function sumNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Expected an array");
  }

  if (!numbers.every((number) => Number.isFinite(number))) {
    throw new TypeError("Expected an array of finite numbers");
  }

  return numbers.reduce((total, number) => total + number, 0);
}

module.exports = { sumNumbers };
