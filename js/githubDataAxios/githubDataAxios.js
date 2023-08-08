
import axios from "axios"
const githubAPI = "https://api.github.com/users";

export async function getGithubData(username) {
  const response = await axios.get(`${githubAPI}/${username}`);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error("Ocorreu um erro!");
  }
}
