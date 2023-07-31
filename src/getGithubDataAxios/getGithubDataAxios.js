const axios = require("axios");

let data;

async function getGithubDataAxios(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    data = await response.data;
  } catch (error) {
    throw new Error("Erro na requisição!");
  }
}
console.log(getGithubDataAxios("RafaelR4mos"));
console.log(data);

// module.exports = getGithubDataAxios;