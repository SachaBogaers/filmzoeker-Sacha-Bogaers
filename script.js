console.log(movies);
const movielist = document.querySelector("#movie-list");
console.log(movielist);

const addMoviesToDom = movies => {
	movies.forEach(movie => {
		console.log(movie);
		const newMovie = document.createElement("li");
		const newMoviePoster = document.createElement("img");
		newMoviePoster.src = movie.Poster;
		newMoviePoster.className = "movie-poster"
		newMovie.appendChild(newMoviePoster);
		movielist.appendChild(newMovie);
	})
}
addMoviesToDom(movies);