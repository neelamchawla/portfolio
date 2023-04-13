import { Carousel } from '3d-react-carousal';
import React, { useContext } from "react";
import './Gallery.css';
import Gallery1 from "../../img/company/1.jpg";
import Gallery2 from "../../img/company/2.jpg";
import Gallery3 from "../../img/company/3.jpg";
import Gallery4 from "../../img/company/4.jpg";
import Gallery5 from "../../img/company/5.jpg";
import Gallery6 from "../../img/company/6.jpg";
import Gallery7 from "../../img/company/7.jpg";
import Gallery8 from "../../img/company/8.jpg";
import Gallery9 from "../../img/company/9.jpg";
import Gallery10 from "../../img/company/10.jpg";
import Gallery11 from "../../img/company/11.jpg";
import { themeContext } from "../../../Context";

function Gallery() {
  let slides = [
    <img className='galleryPic' src={Gallery1} alt="1" />,
    <img className='galleryPic' src={Gallery2} alt="2" />,
    <img className='galleryPic' src={Gallery3} alt="3" />,
    <img className='galleryPic' src={Gallery4} alt="4" />,
    <img className='galleryPic' src={Gallery5} alt="5" />,
    <img className='galleryPic' src={Gallery6} alt="6" />,
    <img className='galleryPic' style={{ width: "58% !important" }} src={Gallery7} alt="7" />,
    <img className='galleryPic' style={{ width: "48% !important" }} src={Gallery8} alt="8" />,
    <img className='galleryPic' src={Gallery9} alt="9" />,
    <img className='galleryPic' src={Gallery10} alt="10" />,
    <img className='galleryPic' src={Gallery11} alt="11" />];

  const callback = function (index) {
    <Carousel slides={slides} />
    // console.log("callback", index);
  }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='gallery' id="gallery">
      <h4 className='galleryHead'>Professional Journey</h4>
      <Carousel
        slides={slides}
        autoplay={true}
        interval={4000}
        onSlideChange={callback}
      />
    </div>
  )
}

export default Gallery;