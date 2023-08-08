import axios from "axios"
const githubAPI = "https://api.github.com/users";

export async function getGithubDataAxios(username) {
  const response = await axios.get(`${githubAPI}/${username}`);
  return response;
}
