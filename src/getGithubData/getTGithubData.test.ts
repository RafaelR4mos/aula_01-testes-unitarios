import { enableFetchMocks } from "jest-fetch-mock";
import { getData } from "./getGithubData";
import "dotenv/config";
import fetchMock from "jest-fetch-mock";

// Necessário para o funcionamento dos mocks
enableFetchMocks();

describe("getGithubData", () => {
  const username = "RafaelR4mos";
  const apiFakeData = {
    login: "RafaelR4mos",
    url: "https://api.github.com/users/RafaelR4mos",
    repos_url: "https://api.github.com/users/RafaelR4mos/repos",
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("Should call the corret URL request", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(apiFakeData));
    getData(username);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      `${process.env.API_KEY}/${username}`
    );
  });

  test("Should call the API just once", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(apiFakeData));
    getData(username);
    expect(fetchMock.mock.calls.length).toBe(1);
  });

  test("Should call the API with the correct user data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(apiFakeData)); // Insere dados fake como resultado da requisição.

    const response = await getData(username);

    expect(response).toHaveProperty("login", username); //Verifica se contém a propriedade login com valor de username.
    expect(response).toEqual(apiFakeData); //Verifica se a resposta da rerquisição é a mesma inserida no mock.
  });
});
