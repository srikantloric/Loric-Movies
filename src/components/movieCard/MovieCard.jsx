import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

function MovieCard({ Title, ImageUrl, IMDBrating }) {
  return (
    <Link to="./detail">
      <div className="card_body">
        <div className="moviecard_container">
          <img src={ImageUrl} alt="movie_card"></img>
          <span className="movie_title">{Title}</span>
          <span className="movie_rating">IMDB : {IMDBrating}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
