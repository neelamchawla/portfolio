import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import React1 from "../../../img/react/1.png";
import React2 from "../../../img/react/2.png";
import React3 from "../../../img/react/3.png";
import React4 from "../../../img/react/4.png";
import React5 from "../../../img/react/5.png";
import React6 from "../../../img/react/6.png";
import ReactLogo from "../../../img/react-logo.png";

import Angular1 from "../../../img/angular/1.png";
import Angular2 from "../../../img/angular/2.png";
import AngularLogo from "../../../img/angular.png";

import Vue1 from "../../../img/vue/1.png";
import Vue2 from "../../../img/vue/2.png";
import VueLogo from "../../../img/vue.png";

import Prototype1 from "../../../img/prototype/1.png";
import Prototype2 from "../../../img/prototype/2.png";
import Prototype3 from "../../../img/prototype/3.png";
import Prototype4 from "../../../img/prototype/4.png";
import Prototype5 from "../../../img/prototype/5.png";
import Prototype6 from "../../../img/prototype/6.png";
import Prototype7 from "../../../img/prototype/7.png";
import Prototype8 from "../../../img/prototype/8.png";
import Prototype9 from "../../../img/prototype/9.png";
import Prototype10 from "../../../img/prototype/10.png";
import Prototype11 from "../../../img/prototype/11.png";
import Prototype12 from "../../../img/prototype/12.png";
import Prototype13 from "../../../img/prototype/13.png";
import PrototypeLogo from "../../../img/prototype.gif";

import Ps1 from "../../../img/ps/1.png";
import Ps2 from "../../../img/ps/2.png";
import Ps3 from "../../../img/ps/3.png";
import Ps4 from "../../../img/ps/4.png";
import Ps5 from "../../../img/ps/5.png";
import Ps6 from "../../../img/ps/6.png";
import Ps7 from "../../../img/ps/7.png";
import Ps8 from "../../../img/ps/8.png";
import Ps9 from "../../../img/ps/9.png";
import Ps10 from "../../../img/ps/10.png";
import Ps11 from "../../../img/ps/11.png";
import Ps12 from "../../../img/ps/12.png";
import Ps13 from "../../../img/ps/13.png";
import Ps14 from "../../../img/ps/14.png";
import Ps15 from "../../../img/ps/15.png";
import Ps16 from "../../../img/ps/16.png";
import Ps17 from "../../../img/ps/17.png";
import Ps18 from "../../../img/ps/18.png";
import MockupLogo from "../../../img/mockup.gif";

import { themeContext } from "../../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <h4 style={{color: darkMode?'white': ''}}>Recent Projects</h4>
      
      <>
      <img src={ReactLogo} className="rotate"/>
      <span style={{ color: "#61DBFB"}}>React</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
         <SwiperSlide>
            <img src={React1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={React2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={React3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={React4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={React5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={React6} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
      <>
      <img src={AngularLogo} className="logo"/>
      <span style={{ color: "#dd1b16"}}>Angular</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={Angular1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Angular2} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
      <>
      <img src={VueLogo} className="logo"/>
      <span style={{ color: "#42b883"}}>Vue</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={Vue1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Vue2} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
      <>
      <img src={PrototypeLogo} className="logo prologo" />
      <span>Prototype Designs</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={Prototype1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype13} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
      <>
      <img src={MockupLogo} className="logo prologo" />
      <span>Mockup Designs</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={Ps1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps13} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps14} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps15} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps16} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps17} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps18} alt="" />
          </SwiperSlide>
         </Swiper>
      </>
    </div>
  );
};

export default Portfolio;
