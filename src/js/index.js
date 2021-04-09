import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();



/* place your code below */

console.log('HELLO 🚀')

// add queryselector to button add
const addButton = document.querySelector('.waterApp__button--add');
// add queryselector to button remove
const removeButton = document.querySelector('.waterApp__button--remove');
// add queryselector to count numbers
const glassCounter = document.querySelector('.waterApp__numbers');
//current data 
const key = new Date().toLocaleString().slice(0, 10);

let currentCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
 currentCounter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

glassCounter.innerHTML = currentCounter;

addButton.addEventListener('click', () => {
  if (currentCounter < 99) {
  currentCounter++;
  glassCounter.innerHTML = currentCounter;
  localStorage.setItem(key, currentCounter);
  }
})

removeButton.addEventListener('click', () => {
  if (currentCounter > 0) {
  currentCounter--;
  glassCounter.innerHTML = currentCounter;
  localStorage.setItem(key, currentCounter);
  }
 })


 const historyButton = document.querySelector('.waterApp__history--js')

 historyButton.addEventListener('click', () => {
  const table = document.querySelector('.table')
  table.classList.toggle('table--js')
})
