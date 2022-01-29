import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "./useWindowDimensions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Navbar() {
  const { width } = useWindowDimensions();

  return (
    <>
      {width < 750 ? (
        <div className="small_device">
          <div className="sm_navbar">
            <div className="sm_left">
              <img
                className="sm_logo"
                alt="loricmovies.com"
                src="https://firebasestorage.googleapis.com/v0/b/loric-movies.appspot.com/o/loricmovie.png?alt=media&token=b6ba4225-a466-4605-a212-5ad109a50755"
              ></img>
              <span className="sm_logo_text">loricmovies.com</span>
            </div>
            <div className="sm_right">
              <SearchIcon className="sm_search_icon"></SearchIcon>
            </div>
          </div>
          <div className="sm_menu_bar">
            <span>
              <NavLink exact to="/" activeClassName="nav_selected">
                Home
              </NavLink>
            </span>
            <span>
              <NavLink exact to="/movie" activeClassName="nav_selected">
                Movie
              </NavLink>
            </span>
            <span>
              <NavLink exact to="/webseries" activeClassName="nav_selected">
                Web Series
              </NavLink>
            </span>
            <span>
              <NavLink exact to="/tvshows" activeClassName="nav_selected">
                TV Shows
              </NavLink>
            </span>
            <ChevronRightIcon style={{ color: "#fff" }} />
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="left">
            <img
              className="logo"
              alt="loricmovies.com"
              src="https://firebasestorage.googleapis.com/v0/b/loric-movies.appspot.com/o/loricmovie.png?alt=media&token=b6ba4225-a466-4605-a212-5ad109a50755"
            ></img>
            <span className="logo_text">loricmovies.com</span>
          </div>

          <div className="right">
            <span>
              <NavLink exact to="/" activeClassName="nav_selected">
                Home
              </NavLink>
            </span>
            <span>
              <NavLink exact to="/movie" activeClassName="nav_selected">
                Movie
              </NavLink>
            </span>
            <span>
              <NavLink exact to="/webseries" activeClassName="nav_selected">
                Web Series
              </NavLink>
            </span>
            <span>
              <NavLink exact to="/tvshows" activeClassName="nav_selected">
                TV Shows
              </NavLink>
            </span>
            <SearchIcon className="search_icon"></SearchIcon>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
