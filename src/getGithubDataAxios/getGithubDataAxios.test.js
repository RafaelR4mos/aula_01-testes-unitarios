const getGithubDataAxios = require("./getGithubDataAxios");
const expect = require("@jest/globals").expect;
const axios = require("axios");

jest.mock("axios");

test("Good response", () => {
  const username = "RafaelR4mos";
  const apiFakeData = {
    login: "RafaelR4mos",
    url: "https://api.github.com/users/RafaelR4mos",
    repos_url: "https://api.github.com/users/RafaelR4mos/repos",
  };

  axios.get.mockResolvedValue(apiFakeData);

  return getGithubDataAxios.all("RafaelR4mos").then(data => expect(data).toEqual(apiFakeData));
})