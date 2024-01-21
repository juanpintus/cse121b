/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Juan F. Pintus';
let currentYear = '2024';
let profilePicture = '/profilephoto.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.getElementById('image');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ['Milanesas', 'Cereal', 'Empanadas'];

foodElement.innerHTML += `<br>${favoriteFoods}`;

let newFavoriteFood = 'Potato Fries';


favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;