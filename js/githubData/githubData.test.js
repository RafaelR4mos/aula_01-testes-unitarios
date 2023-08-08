import { getGithubData } from "./githubData";
import { expect } from "@jest/globals";

import fetchMock from "jest-fetch-mock";

describe('testing api', () => {
  const username = "RafaelR4mos";
  const correctURL = "https://api.github.com/users"
  const apiFakeData = {
    login: "RafaelR4mos",
    url: "https://api.github.com/users/RafaelR4mos",
    reposUrl: "https://api.github.com/users/RafaelR4mos/repos",
  }
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.enableMocks();
  })

  it('calls github and returns data to me', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      login: "RafaelR4mos",
      url: "https://api.github.com/users/RafaelR4mos",
      reposUrl: "https://api.github.com/users/RafaelR4mos/repos",
    }))

    //assert on the response
    const res = await getGithubData(username)
    expect(res).toEqual(apiFakeData);

    //assert on the times called and arguments given to fetchMock
    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual(`${correctURL}/${username}`)
  })
})