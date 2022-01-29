import "./Footer.scss";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Footer() {
  return (
    <div className="footer_container">
      <span className="footer_text">
        &copy; Copyright 2021 loricmovies.com | Powered By{" "}
        <a href="loricsoftwares.com" style={{ color: "#FB6502" }}>
          Loric Softwares
        </a>
      </span>
      {/* <span>
        Made with in <FavoriteIcon className="heart_icon" /> India
      </span> */}
    </div>
  );
}

export default Footer;
