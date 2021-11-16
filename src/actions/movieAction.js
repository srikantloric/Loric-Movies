import firebase from "../Firebase";

const db = firebase.firestore();
export const loadMovieData = () => {
  return (dispatch, getState) => {
    console.log("Movie Action Called");
    db.collection("MOVIES")
      .doc("MOVIE")
      .get()
      .then((data) => {
        const dataTotal = data.data();

        const movieTotal = dataTotal.total_movie;

        var movieList = [];

        for (let i = 1; i < movieTotal + 1; i++) {
          var title = `movie_${i}_title`;
          var thumb_url = `movie_${i}_thumbnail`;
          var rating = `movie_${i}_rating`;
          var upload = `movie_${i}_upload_date`;
          var catagory = `movie_${i}_catagory`;
          const da = {
            title: dataTotal[title],
            movieThumbnail: dataTotal[thumb_url],
            movieRating: dataTotal[rating],
            movieUploadDate: dataTotal[upload],
            movieCatagory: dataTotal[catagory],
          };
          movieList.push(da);
        }
        dispatch({ type: "LOAD_MOVIE", payload: movieList });
      });
  };
};
