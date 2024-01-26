import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import boneMeet from "../pictures/meat_with_bone.jpg"
import yard  from "../pictures/outside_yard.jpg"
import souvlaki from "../pictures/souvlaki_platter.jpg"
import wines from "../pictures/wines.jpg"




export default function Carusel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000

  };
  return (
    <Slider {...settings}>
      <div>
        <h3  className="caruselImageH3"><img className="caruselImage" src={boneMeet} alt="" />
</h3>
      </div>
      <div>
        <h3 className="caruselImageH3"><img className="caruselImage" src={yard} alt="" />
</h3>
      </div>
      <div>
        <h3 className="caruselImageH3"><img className="caruselImage" src={souvlaki} alt="" />
</h3>
      </div>
      <div>
        <h3 className="caruselImageH3"><img className="caruselImage" src={wines} alt="" />
</h3>
      </div>
     
    </Slider>
  );
}