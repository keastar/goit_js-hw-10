const URL = `https://restcountries.com/v3.1/name`;
const OPTIONS = 'name,capital,population,flags,languages';

function fetchCountries(name) {
  return fetch(`${URL}/${name}?fields=${OPTIONS}`).then(res => {
    if (!res.ok) {
      throw new Error('Oops, there is no country with that name');
    }
    return res.json();
  });
}

export { fetchCountries };
