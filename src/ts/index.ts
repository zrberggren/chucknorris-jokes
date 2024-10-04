async function getJoke() {
  const apiUrl = "https://api.chucknorris.io/jokes/random";

  try {
    const response = await fetch(apiUrl); // Fetches data from the API
    const data = await response.json(); // Converts the response to JSON

    if (response.ok) {
      displayJoke(data.value); // Calls displayJoke with the joke if the fetch is successful
    } else {
      console.error("Error fetching joke:", data.message); // Logs an error if there's an issue
    }
  } catch (error) {
    console.error("Error:", error); // Logs any errors encountered during the fetch
  }
}

function displayJoke(joke: string) {
  const jokeElement = document.getElementById("joke") as HTMLElement;
  jokeElement.textContent = joke;
}

document.getElementById("new-joke")?.addEventListener("click", getJoke);

window.addEventListener("load", getJoke);
