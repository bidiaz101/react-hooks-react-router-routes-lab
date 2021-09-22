import React from "react";
import { directors } from "../data";

function Directors() {
  const directorDivs = directors.map(director => {
    const movies = director.movies.map(movie => <li key={movie}>{movie}</li>)

    return (
      <div key={director.name}>
        <h1>{director.name}</h1>
        <ul>
          {movies}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  )
}

export default Directors;
