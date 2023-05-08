import throttle from 'lodash.throttle';
import { fetchCountries } from './fetchCountries';
import './css/styles.css';
import { Notify } from 'notiflix';

// определяем рефы с html-файла
const refs = {
  inputEl: document.querySelector('#search-box'),
  ulEl: document.querySelector('.country-list'),
  divEl: document.querySelector('.country-info'),
};

// задержка при наборе букв в поиске страны в поле input
const DEBOUNCE_DELAY = 300;

// прослушиватель на событие input по поиску страны
refs.inputEl.addEventListener('input', throttle(onSearch, DEBOUNCE_DELAY));

// описание ф-ции поиска страны по событию набора в поле input названия страны
function onSearch(event) {
  event.preventDefault;

  // определяем переменную, которая является динамическим значением из поля input
  let searchQuery = '';
  searchQuery = event.target.value;
  console.log(searchQuery);

  refs.ulEl.innerHTML = '';
  refs.divEl.innerHTML = '';

  if (searchQuery.length === 0) return;
  // вызываем ф-цию запроса на API с предлагаемой динамической переменной
  fetchCountries(searchQuery)
    // промис успеха - разметка с инфо по выбираемой стране
    .then(country => markupSelectionCountries(country))
    // ошибка промиса - если нет совпадений с введеным словом в поле input - Oops, there is no country with that name!
    .catch(onFetchError);
}
//
function markupSelectionCountries(data) {
  console.log('data = ', data);
  console.log('data.length = ', data.length);

  // Если бэкенд вернул 1-ну страну, то под теkстовым полем отображается разметка информации о стране:
  if (data.length === 1) {
    createMarkupCountryInfo(data);
  }
  // Если бэкенд вернул от 2-х до 10-х стран, под теkстовым полем отображается список найденных стран в виде разметки определенной:
  else if (data.length > 1 && data.length <= 10) {
    createMarkupCountries(data);
  } else {
    onFetchInfo();
  }
}

function onFetchInfo() {
  Notify.info('Too many matches found. Please, enter more spesifically name!');
}

function onFetchError() {
  Notify.failure('Oops, there is no country with that name!');
}

// разметка для 1й или 10 стран
function createMarkupCountryInfo(array) {
  console.log('ar = ', array);
  const markup = array
    .map(({ name, flags, capital, population, languages }) => {
      return `
      <li>
        <img src="${flags.svg}" alt="${flags.alt} width="70" height="50" >
        <h2>Name: ${name.official}</h2>
        <p>Capital: ${capital} </p>
        <p>Popuation: ${population} </p>
        <p>Languages: ${Object.values(languages).join('', '')}</p>
      </li>`;
    })
    .join('');

  console.log('mark = ', markup);

  refs.divEl.innerHTML = markup;
}

function createMarkupCountries(array) {
  const markup = array
    .map(({ name, flags }) => {
      return `<li>
      <img src="${flags.svg}" alt="${flags.alt} width="40" height="30" class="mini">
      <h2 class="mini">Name: ${name.official}</h2>
      </li>`;
    })
    .join('');
  refs.ulEl.innerHTML = markup;
}

// fetch(`https://restcountries.com/v3.1/name/eesti`)
//   .then(r => {
//     return r.json();
//   })
//   .then(renderCountryCard)
//   // console.log(markuper);
//   // refs.divEl.innerHTML = markuper;
//   .catch(error => {
//     console.log(error);
//   });

// function renderCountryCard(country) {
//   const marekup = createMarkupCountry(country);
//   refs.divEl.innerHTML = marekup;
// }
