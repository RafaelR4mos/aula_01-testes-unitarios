import "dotenv/config";

export async function getData(username: string) {
  const response = await fetch(`${process.env.API_KEY}/${username}`);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error("Ocorreu um erro!");
  }
}
