/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Juan F. Pintus",
    photo : "images/profilephoto.png",
    favoriteFoods: [
        'Milanesas',
        'Empanadas',
        'Cereal',
        'Potato fries',
    ],

    hobbies: [
        'Drawing',
        'Videogames',
        'Movies',
    ],

    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
  {
    place: 'Buenos Aires, Argentina',
    length: '20 years'
  },
  {
    place: 'Resistencia, Argentina',
    length: '1 year'
  },
  {
    place: 'Málaga, Spain',
    length: '1 year'
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;

document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    
    // Create <dt> element
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    // Create <dd> element
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    
    // Append <dt> and <dd> elements to the <dl> element with ID places-lived
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
});
