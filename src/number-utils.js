function sumNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Expected an array");
  }

  return numbers.reduce((total, number) => total + number, 0);
}

module.exports = { sumNumbers };
