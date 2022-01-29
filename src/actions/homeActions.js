import firebase from "../Firebase";

const db = firebase.firestore();

export const loadHomeData = () => {
  console.log("callled");
  return (dispatch, getState) => {
    // db.collection("MOVIES")
    //   .doc("movies")
    //   .get()
    //   .then((data) => {
    //     const totalMovies = data.data().total_movies;
    //     console.log("movieCount :", totalMovies);
    //     if (totalMovies === 0) {
    //       console.log("No Movies");
    //     } else {
    //       const movie_list = [];
    //       for (var i = 1; i <= totalMovies; i++) {
    //         var title = `movie_${i}_title`;
    //         var thumb_url = `movie_${i}_thumbnail`;
    //         var rating = `movie_${i}_rating`;
    //         // console.log(title);
    //         const obj = {
    //           title: title,
    //           thumb: thumb_url,
    //           rating: rating,
    //         };
    //         console.log(obj);
    //         movie_list.push(obj);
    //         // setMoviesList(...moviesList, obj);
    //       }
    //       dispatch({ type: "LOAD_HOME", payload: movie_list });
    //     }
    //   });

    db.collection("MOVIES")
      .get()
      .then((querySnapshot) => {
        const movieCollection = [];
        querySnapshot.forEach((doc) => {
          movieCollection.push({
            [doc.id]: doc.data(),
          });
        });

        const movieHomeList = [];
        movieCollection.forEach((val, index) => {
          const type = "" + Object.keys(val)[0];
          const type1 = "total_" + Object.keys(val)[0].toLowerCase();
          const totalItems = val[type][type1];

          if (totalItems > 0) {
            const movie_list = [];
            for (var i = 1; i <= totalItems; i++) {
              var title = `${type.toLowerCase()}_${i}_title`;
              var thumb_url = `${type.toLowerCase()}_${i}_thumbnail`;
              var rating = `${type.toLowerCase()}_${i}_rating`;
              var upload = `${type.toLowerCase()}_${i}_upload_date`;

              var title_data = val[type][title];
              var thumb_data = val[type][thumb_url];
              var rating_data = val[type][rating];
              var upload_date = val[type][upload];
              var rating_data = val[type][rating];
              // console.log(new Date(upload_date).valueOf());

              const obj = {
                title: title_data,
                thumb: thumb_data,
                rating: rating_data,
                uploadDate: upload_date,
              };
              movie_list.push(obj);
              movieHomeList.push(obj);
            }
          }
        });

        dispatch({ type: "LOAD_HOME", payload: movieHomeList });
      });
  };
};
