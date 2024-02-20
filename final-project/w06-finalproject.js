/* W06: Final Project */
let allCharacters;
let filteredCharacters;

/* Step 4: Function to display characters */
const displayCharacters = () => {
  const charactersElement = document.getElementById("characters");

  // Clear previous character cards
  charactersElement.innerHTML = "";

  filteredCharacters.forEach((character) => {
    // Create a card for each character
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");

    // Character name
    const characterName = document.createElement("h3");
    characterName.textContent = character.name;
    characterCard.appendChild(characterName);

    // Character details
    const characterDetails = document.createElement("p");
    characterDetails.textContent = `Race: ${character.race}, Gender: ${character.gender}`;
    characterCard.appendChild(characterDetails);

    // Append character card to characters element
    charactersElement.appendChild(characterCard);
  });
};

/* Step 5: Function to fetch characters */
const fetchCharacters = async () => {
  const token = "8kuJtMXUkDp_Unf9eJAK";
  const baseUrl = "https://the-one-api.dev/v2";
  let url = `${baseUrl}/character`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch character data");
    }

    const data = await response.json();
    allCharacters = data.docs; // Assuming character data is in 'docs' property
    filteredCharacters = allCharacters;
    displayCharacters();
  } catch (error) {
    console.error("Error fetching character data:", error.message);
  }
};

const filterCharacters = (fieldValue, field) => {
  filteredCharacters = allCharacters.filter(char => char[field].toLowerCase() === fieldValue.toLowerCase())
  displayCharacters();
}


// Event listener for filter select
document.getElementById("raceFilter").addEventListener("change", function () {
  console.log(this.value)
  if(this.value) {
    filterCharacters(this.value, "race");
  } else {
    filteredCharacters = allCharacters;
    displayCharacters();
  }
});


// Call fetchCharacters function to fetch and display character data
fetchCharacters();
