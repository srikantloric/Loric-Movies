import React from "react";
import MovieCard from "./movieCard/MovieCard";
import "./MovieCards.scss";

function MovieCards() {
  return (
    <div className="movie_container">
      <MovieCard
        Title="dfdf"
        ImageUrl="https://assets.mubicdn.net/images/notebook/post_images/33421/images-w1400.jpg?1625400709"
        IMDBrating="4.0"
      />
    </div>
  );
}

export default MovieCards;
