import React, { useEffect, useState } from "react";
import CarouselSlider from "../components/carouselslider/Carousel";
import SearchIcon from "@mui/icons-material/Search";

import "./Movie.scss";

import MovieCard from "../components/movieCard/MovieCard";
import { loadMovieData } from "../actions/movieAction";
import { connect } from "react-redux";

function Movie(props) {
  const [movies, setMovies] = useState(null);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [catagorySelected, setCatagorySelected] = useState("Bolliwood");
  const [languageSelected, setLanguageSelected] = useState("");
  const [YearSelected, setYearSelected] = useState("");

  const catagoryList = [
    {
      label: "Catagory",
      value: "",
    },
    {
      label: "Holliwood",
      value: "holliwood",
    },
    {
      label: "Bolliwood",
      value: "bolliwood",
    },
    {
      label: "SouthIndian",
      value: "southindian",
    },
    {
      label: "Netflix",
      value: "netflix",
    },
  ];
  const languageList = [
    {
      label: "Language",
      value: "",
    },
    {
      label: "Hindi",
      value: "hindi",
    },
    {
      label: "English",
      value: "english",
    },
    {
      label: "Tamil",
      value: "tamil",
    },
  ];
  const yearList = [
    {
      label: "Year",
      value: "",
    },
    {
      label: "Y - 2021",
      value: "2021",
    },
    {
      label: "Y - 2020",
      value: "2020",
    },
    {
      label: "Y - 2019",
      value: "2019",
    },
  ];
  const setInitialMovies = () => {
    function custom_sort(a, b) {
      return (
        new Date(a.movieUploadDate.seconds).getTime() -
        new Date(b.movieUploadDate.seconds).getTime()
      );
    }
    setMovies(props.data && props.data.sort(custom_sort));
  };

  const handleCatagoryChange = (event) => {
    setInitialMovies();
    var catagory = event.target.value;

    var arr = movies.filter(
      (item) =>
        item.movieCatagory.toLowerCase().trim() == catagory.toLowerCase().trim()
    );
    setMovies(arr);
  };

  useEffect(() => {
    if (props.data == null) {
      props.loadHomeData();
    } else {
      console.log("loaded from local state");
    }
    setInitialMovies();
  }, []);

  return (
    <div className="page">
      <span className="section_text">Movie Section</span>
      <div className="slider_container">
        <CarouselSlider />
      </div>

      <div className="filter_items">
        <div class="search">
          <SearchIcon className="filter_searchicon" />
          <input
            type="text"
            class="searchTerm"
            placeholder="Search Movie .."
            value={searchedTerm}
            onfocus={(x) => {
              x.style.background = "yellow";
            }}
            onChange={(event) => {
              setSearchedTerm(event.target.value);
            }}
          ></input>
        </div>

        <div className="select_catagory">
          <select onChange={(props) => setCatagorySelected(props.target.value)}>
            {catagoryList.map((option, key) => {
              return <option vlaue={option.value}>{option.label}</option>;
            })}
          </select>
        </div>

        <div className="select_language">
          <select>
            {languageList.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="select_year">
          <select>
            {yearList.map((option) => {
              return <option value={option.value}>{option.label}</option>;
            })}
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

      <div className="movie_cards">
        {movies &&
          movies
            .filter((val) => {
              // console.log(val);
              if (searchedTerm == "") {
                return val;
              } else if (
                val.title
                  .toLowerCase()
                  .includes(searchedTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .filter(
              (item) =>
                item.movieCatagory.toLowerCase().trim() ==
                catagorySelected.toLowerCase().trim()
            )

            .map((item, key) => {
              // console.log(item.uploadDate.seconds);
              return (
                <MovieCard
                  Title={item.title}
                  ImageUrl={item.movieThumbnail}
                  IMDBrating={item.movieRating}
                  key={key}
                />
              );
            })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.movieReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadHomeData: () => dispatch(loadMovieData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
