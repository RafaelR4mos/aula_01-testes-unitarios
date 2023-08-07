const average = require("./average.js");
const expect = require("@jest/globals").expect;


test("average", () => {
  expect(average([2, 4, 6])).toBe(4);
})