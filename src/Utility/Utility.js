export default class Utility {
  constructor() {
    this.state = {
    }
  }

  fetchFilm(filmIndex) {
    const fetchURL = "https://swapi.co/api/films/"
    return fetch(`${fetchURL}${filmIndex}/`)
      .then(response => response.json())
      .then(({ title, opening_crawl: text, release_date: date }) => {
        const film = { title, text, date };
        return film
      })
      .catch(error => ({ error }));
  }

}