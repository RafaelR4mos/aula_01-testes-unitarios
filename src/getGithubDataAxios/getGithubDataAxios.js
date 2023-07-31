const axios = require("axios");

async function getGithubDataAxios(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
console.log(getGithubDataAxios("RafaelR4mos"));

// module.exports = getGithubDataAxios;