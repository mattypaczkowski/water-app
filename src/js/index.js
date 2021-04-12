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

const historyButton = document.querySelector('.waterApp__history--js')

const table = document.querySelector('.table--js')
//current data 
const key = new Date().toLocaleString().slice(0, 10);


let currentCounter = 0;

const localStorageValue = localStorage.getItem(key);



if (localStorageValue) {
 currentCounter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}


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

  historyButton.addEventListener('click', () => {
  const table = document.querySelector('.table')
  table.classList.toggle('table--js')
})

if (table) {
  for (let i = 0; i < localStorage.lenght; i++) {
    let value = localStorage.getItem(localStorage.key(i));
    const myTable = `<tr class="history__table--row table__row--js">
                            <td>${localStorage.key(i)}</td>
                            <td>${value}</td>
                          </tr>`;
    table.innerHTML += myTable;

  }
}
