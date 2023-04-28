// import throttle from 'lodash.throttle';

// import './css/styles.css';

// // Напиши функцию fetchCountries(name)
// // которая делает HTTP - запрос на ресурс name
// // и возвращает промис с массивом стран - результатом запроса

// const refs = {
//   inputEl: document.querySelector('#search-box'),
//   ulEl: document.querySelector('.country-list'),
//   divEl: document.querySelector('.country-info'),
// };

// const DEBOUNCE_DELAY = 300;

// refs.inputEl.addEventListener('input', throttle(onSearch, DEBOUNCE_DELAY));

// function onSearch(event) {
//   event.preventDefault;

//   const searchQuery = event.target.value;
//   console.log(searchQuery);

//   function fetchCountries(name) {
//     // let name = searchQuery;
//     const options = {};
//     const url = `https://restcountries.com/v3.1/name/{name}`;
//     fetch(url, options)
//       .then(r => r.json())
//       .then(console.log);
//   }
// }
