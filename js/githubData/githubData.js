const githubAPI = "https://api.github.com/users";

async function getGithubData(username) {
  const response = await fetch(`${githubAPI}/${username}`);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error("Ocorreu um erro!");
  }
}

module.exports = getGithubData;