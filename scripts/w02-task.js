/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Anthony Trillo Espejo';
const currentYear = 2023;
const profilePicture = '/images/placeholder.jpeg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#image');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFood = ['Pizza', 'Arroz chaufa', 'Ají de gallina', 'Ceviche'];
foodElement.innerHTML = favoriteFood;

const newFood = 'Causa rellena';
favoriteFood.push(newFood);

foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();

foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();

foodElement.innerHTML += `<br>${favoriteFood}`;