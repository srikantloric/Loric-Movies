import React, { useEffect, useState } from "react";
import Carousel from "../components/carouselslider/Carousel.jsx";
import Suggestion from "../components/Suggestion.jsx";
import MovieCards from "../components/MovieCards";
import "./Home.scss";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { connect } from "react-redux";
import { loadHomeData } from "../actions/homeActions.js";
import MovieCard from "../components/movieCard/MovieCard.jsx";
function Home(props) {
  const [homeData, setHomeData] = useState();

  function reducer(acc, cur) {
    return { ...acc, [cur.title]: cur };
  }

  useEffect(() => {
    if (props.data == null) {
      props.loadHomeData();
      // const dara = props.data.reduce(reducer, {});
    } else {
      console.log("loaded from local state");
    }

    function custom_sort(a, b) {
      return (
        new Date(a.uploadDate.seconds).getTime() -
        new Date(b.uploadDate.seconds).getTime()
      );
    }
    setHomeData(props.data && props.data.sort(custom_sort));
  }, []);

  return (
    <div className="home_page">
      <Carousel />

      <Suggestion />

      <div className="movie_cards">
        {homeData &&
          homeData.map((item, key) => {
            // console.log(item.uploadDate.seconds);
            return (
              <MovieCard
                Title={item.title}
                ImageUrl={item.thumb}
                IMDBrating={item.rating}
                key={key}
              />
            );
          })}
      </div>

      <div className="goto_saved">
        <span className="saved_text"> Saved</span>

        <ScheduleIcon className="time_icon" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.homeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadHomeData: () => dispatch(loadHomeData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
