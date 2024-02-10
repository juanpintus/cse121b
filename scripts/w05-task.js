/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement= document.getElementById("temples");

let templeList= [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach(temple => {
    let templeArticle = document.createElement("article");
    // TITLE
    const templeTitle = document.createElement("h3");
    templeTitle.innerText = temple.templeName;
    // IMG 
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);
    // APPEND ELEMENTS 
    templeArticle.appendChild(templeTitle);
    templeArticle.appendChild(img);
    templesElement.appendChild(templeArticle);
  });
}

displayTemples(templeList);

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  // Convert the response to JSON and assign it to templeList 
  templeList = await response.json(); 
  // Display the temples after fetching and populating the list
  displayTemples(templeList);
}

/* reset Function */
const reset = () => {
  // Clearing all the child elements
  templesElement.innerHTML = ""; 
}


/* filterTemples Function */
const filterTemples = (temples) => {
  // Clear the displayed list of temples
  reset(); 
  
  // Get the value of the filter dropdown
  const filter = document.querySelector("#filtered").value; 
  
  switch(filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "all":
    default:
      displayTemples(temples);
  }
}


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});


getTemples();