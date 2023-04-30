import './css/styles.css';

const languages = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'JAVA' },
  { label: 'Pyton' },
];

const refs = {
  inputEl: document.querySelector('#search-box'),
  ulEl: document.querySelector('.country-list'),
  divEl: document.querySelector('.country-info'),
};
refs.inputEl.addEventListener('input', onInputChange);

const listItemsMarkup = createListItems(languages);

// console.log(listItemsMarkup);
populateListMarkup(listItemsMarkup);

function createListItems(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function onInputChange(e) {
  //из интерфейса получаем фильтр - конкретные буквы при вводе в поле input
  const filter = e.target.value.toLowerCase();

  //из модели const languages фильтруем только те объекты,
  //   которые под этот фильтр подходят - содержать в названии определенную букву или сочитание букв
  const filteredItems = languages.filter(l =>
    l.label.toLowerCase().includes(filter)
  );

  //создаем разметку под отфильтрованный массив
  const listItemsMarkup = createListItems(filteredItems);
  // console.log(listItemsMarkup);
  // записываем в список в интерфейсе отфильтрованную разметку
  populateListMarkup(listItemsMarkup);
}

function populateListMarkup(markup) {
  refs.ulEl.innerHTML = markup;
}
//on test is good!
