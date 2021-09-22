import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDivs = movies.map(movie => {
    const genres = movie.genres.map(genre => <li key={genre}>{genre}</li>)

    return (
      <div key={movie.title}>
        <h1>{movie.title}</h1>
        <h3>Runtime: {movie.time} Minutes</h3>
        <ul>
          {genres}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDivs}
    </div>
  )
}

export default Movies;
