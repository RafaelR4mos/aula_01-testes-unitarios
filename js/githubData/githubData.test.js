import { getGithubData } from "../githubDataAxios/githubDataAxios";
import { expect } from "@jest/globals";
import { enableFetchMocks } from "jest-fetch-mock";

const fetchMock = enableFetchMocks();


describe("GetGithubData Function", () => {
  const username = "RafaelR4mos";
  const correctURL = "https://api.github.com/users"
  const apiFakeData = {
    login: "RafaelR4mos",
    url: "https://api.github.com/users/RafaelR4mos",
    reposUrl: "https://api.github.com/users/RafaelR4mos/repos",
  }

  beforeEach(() => {
    fetchMock.resetMocks();
  });


  test("get data from github with the correct URL", () => {
    fetchMock.mockResponseOnce(JSON.stringify(apiFakeData))
    getGithubData(username);
    expect(fetchMock.mock.calls[0][0]).toEqual(`${correctURL}/${username}`)
  })

  test("Should call the API just once", () => {
    fetchMock.mockResponseOnce(JSON.stringify(apiFakeData));
    getGithubData(username);
    expect(fetchMock.calls.length).toBe(1);
  });

  test("Should call the API with the correct user data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(apiFakeData));

    const response = await getGithubData(username);

    expect(response).toHaveProperty("login", username);
    expect(response).toEqual(apiFakeData);
  });
})
