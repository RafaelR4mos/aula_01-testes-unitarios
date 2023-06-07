export const getGithubData = async () => {
  await fetch("https://api.github.com/users/RafaelR4mos")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

console.log(getGithubData());
