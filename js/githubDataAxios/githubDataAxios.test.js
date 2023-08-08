import { getGithubDataAxios } from "./githubDataAxios";
import { expect, jest } from "@jest/globals";
import axios from "axios"

jest.mock("axios");

describe('testing api', () => {
  const username = "RafaelR4mos";
  const correctURL = "https://api.github.com/users"
  const apiFakeData = {
    login: "RafaelR4mos",
    url: "https://api.github.com/users/RafaelR4mos",
    reposUrl: "https://api.github.com/users/RafaelR4mos/repos",
  }

  test('calls github and returns data to me', async () => {
    axios.get.mockResolvedValue({
      login: "RafaelR4mos",
      url: "https://api.github.com/users/RafaelR4mos",
      reposUrl: "https://api.github.com/users/RafaelR4mos/repos",
    })

    //assert on the response
    const res = await getGithubDataAxios(username)
    expect(res).toEqual(apiFakeData);
  })

  test('Should call the correct URL just once', async () => {
    axios.get.mockResolvedValue({
      login: "RafaelR4mos",
      url: "https://api.github.com/users/RafaelR4mos",
      reposUrl: "https://api.github.com/users/RafaelR4mos/repos",
    })

    //assert on the response
    await getGithubDataAxios(username)

    expect(axios.get.mock.calls.length).toEqual(1);
    expect(axios.get.mock.calls[0][0]).toEqual(`${correctURL}/${username}`);
  })
})
