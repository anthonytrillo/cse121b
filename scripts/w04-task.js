/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
  name: 'Anthony Trillo',
  photo: 'images/placeholder.jpeg',
  favoriteFoods: ['Arroz Chaufa', 'Pizza', 'Ají de Gallina'],
  hobbies: ['Table Tennis', 'Lisen to Music', 'Travel'],
  placesLived: [],

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Lima - Perú',
    length: '19 year'
  },
  {
    place: 'La Plata - Buenos Aires',
    length: '14 year'
  }
);



/* DOM Manipulation - Output */

/* Name */
let profileName = document.getElementById('name');
profileName.textContent = myProfile.name;

/* Photo with attributes */
let profilePhoto = document.getElementById('photo');
profilePhoto.setAttribute('alt', myProfile.name);
profilePhoto.setAttribute('src', myProfile.photo);

/* Favorite Foods List*/
let favoriteFoods = document.getElementById('favorite-foods');

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoods.appendChild(li);
});

/* Hobbies List */
let hobbies = document.getElementById('hobbies');

myProfile.hobbies.forEach(hobbie => {
  let li = document.createElement('li');
  li.textContent = hobbie;
  hobbies.appendChild(li);
});

/* Places Lived DataList */

let placesLive = document.getElementById('places-lived');

myProfile.placesLived.forEach(places => {
  let dt = document.createElement('dt');
  let dd = document.createElement('dd');

  dt.textContent = '🏡 '+places.place;
  dd.textContent = places.length;

  placesLive.appendChild(dt);
  placesLive.appendChild(dd);
});


