const movielist = document.querySelector("#movie-list");

const getImdbUrl = id => `https://www.imdb.com/title/${id}`;

const addMoviesToDom = movies => {
	movies.forEach(movie => {
		const newMovie = document.createElement("li");
		const newMovieURL = document.createElement("a");
		newMovieURL.href = getImdbUrl(movie.imdbID);
		newMovieURL.target = "_blank";
		const newMoviePoster = document.createElement("img");
		newMoviePoster.src = movie.Poster;
		newMoviePoster.className = "movie-poster";
		newMovie.appendChild(newMovieURL);
		newMovieURL.appendChild(newMoviePoster);
		movielist.appendChild(newMovie);
	})
}
addMoviesToDom(movies);


const radioButtons = document.getElementsByName("filter-button");

const filterMovies = (value) => {
	let filteredMovies = movies;
	switch (value) {
		case "all":
			break;
		case "latest":
			const filterLatestMovies = movie => {
				return movie.Year >= 2004;
			}
			filteredMovies = movies.filter(filterLatestMovies);
			break;
		case "avengers": case "x-men": case "princess": case "batman":
			const includedInTitle = movie => {
				const movieTitle = movie.Title.toLowerCase();
				return movieTitle.includes(value);
			}
			filteredMovies = movies.filter(includedInTitle)
			break;
		default:
			break;
	}
	movielist.innerHTML = "";
	addMoviesToDom(filteredMovies);
}

radioButtons.forEach(button => {
	button.addEventListener("change", () => {
		filterMovies(button.value);
	})
});