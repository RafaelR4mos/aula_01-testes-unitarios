const getGithubData = require("./githubData");
const expect = require("@jest/globals").expect;

test("get data from github", () => {
  expect(getGithubData("RafaelR4mos"))
})