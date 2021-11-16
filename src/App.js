import Navbar from "./components/Navbar.jsx";
import "./App.scss";
import Footer from "./components/footer/Footer.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import WebSeries from "./pages/WebSeries.jsx";
import TVShows from "./pages/TVShows.jsx";
import DetailPage from "./pages/DetailPage.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB6502",
    },
    secondary: {
      main: "#1E1E1E",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/webseries">
            <WebSeries />
          </Route>
          <Route path="/tvshows">
            <TVShows />
          </Route>
          <Route path="/detail">
            <DetailPage />
          </Route>
        </Switch>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
