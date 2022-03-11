const API_KEY = "api_key=68872e502f091e2ab20f84d32c9107f4";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const BAS_IMAGE = "https://image.tmdb.org/t/p/w500/";
const container = document.querySelector(".contener");

getMonies(API_URL);
function getMonies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  container.innerHTML = "";
  data.forEach((element) => {
    const { title, poster_path, vote_average, overview } = element;
    let movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `   
        <img src=${BAS_IMAGE + poster_path} />
        <div class="movie-info">
        <h3>${title}</h3>
        <span>${vote_average}</span>
        </div>
        <div class="description">
        <p>${overview}</p>`;

    container.appendChild(movieEl);
  });
}
