import React, { Component } from "react";
import Slider from "react-slick";
import Films from "../Film/Films";
import styleSlick from "./MultipleRow.module.css";
import FilmsHover from "../Film/FilmsHover";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    ></div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class MultipleRows extends Component {
  renderFilm = () => {
    return this.props.arrFilm.map((item, index) => {
      return (
        <div className={styleSlick["width-item"]} key={index}>
          {/* <Films phim={item} /> */}
          <FilmsHover phim={item} />
        </div>
      );
    });
  };
  render() {
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      preArrow: <SamplePrevArrow />,
      autoplay: false,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.renderFilm()}

        </Slider>
      </div>
    );
  }
}
