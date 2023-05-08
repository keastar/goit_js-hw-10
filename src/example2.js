import throttle from 'lodash.throttle';
import './css/styles.css';
import NewsApiService from './news-servise.js';

const refs = {
  inputEl: document.querySelector('#search-box'),
  ulEl: document.querySelector('.country-list'),
  divEl: document.querySelector('.country-info'),
};
const DEBOUNCE_DELAY = 300;

// let searchQuery = '';
const NewsApiService = new NewsApiService();
console.log(NewsApiService);

// const options = {
//   headers: {
//     Authorizations: '7a1e50780a974be3aa5b796c5b556f9b',
//   },
// };

refs.inputEl, addEventListener('input', throttle(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault;
  NewsApiService.query = e.target.value;
  NewsApiService.fetchArticles();
}
