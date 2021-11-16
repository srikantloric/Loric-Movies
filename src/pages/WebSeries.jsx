import React from "react";
import CarouselSlider from "../components/carouselslider/Carousel";
import "./WebSeries.scss";
import "./pages.scss";
import SearchIcon from "@mui/icons-material/Search";

import MovieCards from "../components/MovieCards.jsx";

function WebSeries() {
  return (
    <div className="page">
      <span className="section_text">Web-Series Section</span>
      <div className="slider_container">
        <CarouselSlider />
      </div>
      <div className="filter_items">
        <div class="search">
          <SearchIcon className="filter_searchicon" />
          <input
            type="text"
            class="searchTerm"
            placeholder="Search WebSeries .."
          ></input>
        </div>

        <div className="select_catagory">
          <select>
            <option>Bolliwood</option>
            <option>Holliwood</option>
            <option>South Indian</option>
          </select>
        </div>

        <div className="select_language">
          <select>
            <option>Hindi</option>
            <option>English</option>
          </select>
        </div>
        <div className="select_year">
          <select>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2016</option>
            <option>2017</option>
          </select>
        </div>
        <div className="age_group">
          <select>
            <option>All</option>
            <option>Ony 18+</option>
            <option>Below 13</option>
          </select>
        </div>

        <button className="find_btn">Find</button>
      </div>
      <hr />
      <MovieCards />
    </div>
  );
}

export default WebSeries;
