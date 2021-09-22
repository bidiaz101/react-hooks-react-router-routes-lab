import React from "react";
import { actors } from "../data";

function Actors() {
  const actorDivs = actors.map(actor => {
    const movies = actor.movies.map(movie => <li key={movie}>{movie}</li>)

    return (
      <div key={actor.name}>
        <h1>{actor.name}</h1>
        {movies}
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  )
}

export default Actors;
