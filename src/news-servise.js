export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log(this);
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}&apiKey=7a1e50780a974be3aa5b796c5b556f9b`;

    fetch(url)
      .then(r => r.json())
      .then(console.log);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
