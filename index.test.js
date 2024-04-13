const getMissingNumber = require("./index");

test("Test with numbers in random order", () => {
  const result = getMissingNumber([5, 0, 1, 3, 2]);
  expect(result).toBe(4);
});

test("Test with numbers in ascending order", () => {
  const result = getMissingNumber([7, 9, 10, 11, 12]);
  expect(result).toBe(8);
});

test("Test with numbers in descending order", () => {
  const result = getMissingNumber([9, 8, 7, 5, 4]);
  expect(result).toBe(6);
});

test("Test with an empty array", () => {
  const result = getMissingNumber([]);
  expect(result).toBeUndefined();
});

test("Test with a single element in the array", () => {
  const result = getMissingNumber([0]);
  expect(result).toBeUndefined();
});

test("Test with negative numbers", () => {
  const result = getMissingNumber([-2, -1, 0, 1, 3]);
  expect(result).toBe(2);
});

test("Test with a missing number in the middle of the array", () => {
  const result = getMissingNumber([5, 0, 1, 3, 4]);
  expect(result).toBe(2);
});

test("Test with repeated numbers", () => {
  const result = getMissingNumber([5, 5, 3, 3, 2]);
  expect(result).toBe(4);
});
