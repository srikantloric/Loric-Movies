import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function CarouselSlider() {
  return (
    <div className="slider_container">
      <Carousel className="slider_home" indicators={true}>
        <Carousel.Item className="slider_item">
          <img
            className="d-block w-100"
            src="https://blog.hdwallsource.com/wp-content/uploads/2018/01/the-finest-hours-movie-widescreen-wallpaper-62646-64624-hd-wallpapers.jpg"
            alt="First slide"
          />

          <button className="slider_btn">
            DOWNLOAD NOW
            <ArrowDownwardIcon className="download_icon" />
          </button>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422"
            alt="Second slide"
          />
          <button className="slider_btn">
            DOWNLOAD NOW <ArrowDownwardIcon className="download_icon" />
          </button>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.hdwallsource.com/wp-content/uploads/2018/01/the-finest-hours-movie-wallpaper-62647-64625-hd-wallpapers-680x383.jpg"
            alt="Third slide"
          />
          <button className="slider_btn">
            DOWNLOAD NOW <ArrowDownwardIcon className="download_icon" />
          </button>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://broflow.files.wordpress.com/2012/02/movie-banner.jpg?w=810"
            alt="Third slide"
          />
          <button className="slider_btn">
            DOWNLOAD NOW <ArrowDownwardIcon className="download_icon" />
          </button>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
