const sum = require("./sum.js");
const expect = require("@jest/globals").expect

test("sum", () => {
  expect(sum(2, 4)).toBe(6);
})