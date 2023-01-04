import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import './GalleryCard.css'

// import React1 from "../../../img/react/1.png";
// import React2 from "../../../img/react/2.png";
// import React2a from "../../../img/react/2a.PNG";
// import React3 from "../../../img/react/3.png";
// import React4 from "../../../img/react/4.png";
// import React5 from "../../../img/react/5.png";
// import React6 from "../../../img/react/6.png";
import ReactLogo from "../../../img/logo/react-logo.png";

// import Angular1 from "../../../img/angular/1.png";
// import Angular2 from "../../../img/angular/2.png";
import AngularLogo from "../../../img/logo/angular.png";

// import Vue1 from "../../../img/vue/1.png";
// import Vue2 from "../../../img/vue/2.png";
import VueLogo from "../../../img/logo/vue.png";

// import Prototype1 from "../../../img/prototype/1.png";
// import Prototype2 from "../../../img/prototype/2.png";
// import Prototype3 from "../../../img/prototype/3.png";
// import Prototype4 from "../../../img/prototype/4.png";
// import Prototype5 from "../../../img/prototype/5.png";
// import Prototype6 from "../../../img/prototype/6.png";
// import Prototype7 from "../../../img/prototype/7.png";
// import Prototype8 from "../../../img/prototype/8.png";
// import Prototype9 from "../../../img/prototype/9.png";
// import Prototype10 from "../../../img/prototype/10.png";
// import Prototype11 from "../../../img/prototype/11.png";
// import Prototype12 from "../../../img/prototype/12.png";
// import Prototype13 from "../../../img/prototype/13.png";
import PrototypeLogo from "../../../img/prototype.gif";

// import Ps1 from "../../../img/ps/1.png";
// import Ps2 from "../../../img/ps/2.png";
// import Ps3 from "../../../img/ps/3.png";
// import Ps4 from "../../../img/ps/4.png";
// import Ps5 from "../../../img/ps/5.png";
// import Ps6 from "../../../img/ps/6.png";
// import Ps7 from "../../../img/ps/7.png";
// import Ps8 from "../../../img/ps/8.png";
// import Ps9 from "../../../img/ps/9.png";
// import Ps10 from "../../../img/ps/10.png";
// import Ps11 from "../../../img/ps/11.png";
// import Ps12 from "../../../img/ps/12.png";
// import Ps13 from "../../../img/ps/13.png";
// import Ps14 from "../../../img/ps/14.png";
// import Ps15 from "../../../img/ps/15.png";
// import Ps16 from "../../../img/ps/16.png";
// import Ps17 from "../../../img/ps/17.png";
// import Ps18 from "../../../img/ps/18.png";
import MockupLogo from "../../../img/mockup.gif";

import { themeContext } from "../../../Context";

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <h4 style={{color: darkMode?'white': ''}}>Recent Projects</h4>
      
      <>
      <img src={ReactLogo} className="rotates" alt="reactlogo"/>
      <span style={{ color: "#61DBFB"}}>React</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
         <SwiperSlide className="ReactSlide">
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">SpaceX</h2>
                    <button onClick={() => window.open("https://neelamchawla.github.io/spaceX/")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">E-Commerce World</h2>
                    <button onClick={() => window.open("https://neelamchawla.github.io/ecommerce/")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Multiple Project</h2>
                    <button onClick={() => window.open("https://multipleprojects.netlify.app/")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">MovieLand</h2>
                    <button onClick={() => window.open("https://moviezland.netlify.app/")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Dashboard</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Website</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">YouTube Clone</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Fan SignUp</h2>
                    <button onClick={() => window.open("https://fansignup-react.netlify.app/")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">API Data</h2>
                    <button onClick={() => window.open("https://neelams-practical.netlify.app/")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={React2a} alt="React" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={React3} alt="React" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={React4} alt="React" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={React5} alt="React" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={React6} alt="React" />
          </SwiperSlide> */}
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
          <SwiperSlide className="AngularSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Recipe Book</h2>
                    <button onClick={() => window.open("https://recipe-book-72771.web.app/auth")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="AngularSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Road Trip</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Angular1} alt="angular" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Angular2} alt="angular" />
          </SwiperSlide> */}
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
          <SwiperSlide className="VueSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Todo List</h2>
                    <button onClick={() => window.open("https://recipe-book-72771.web.app/auth")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="VueSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Todo List</h2>
                    <button onClick={() => window.open("https://recipe-book-72771.web.app/auth")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Vue1} alt="vue" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Vue2} alt="vue" />
          </SwiperSlide> */}
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
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Twitter Clone</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Instagram Clone</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Wonderlust</h2>
                    <button onClick={() => window.open("https://glassmorphism-web.netlify.app/")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Coffee Mania</h2>
                    <button onClick={() => window.open("https://fqjhuc.axshare.com/#id=o72945&p=menu")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Sign Up</h2>
                    <button onClick={() => window.open("https://hmgx5l.axshare.com/#id=w451u3&p=sign_up&sc=2&g=1")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Cafe App</h2>
                    <button onClick={() => window.open("https://www.figma.com/proto/hjIMroYoFQfEFvAkzmstqK/Donuts%26Drinks?node-id=1%3A2&scaling=scale-down")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Unchanted Path</h2>
                    <button onClick={() => window.open("https://4gg6mg.axshare.com/#id=gvp28l&p=unchartedpath")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">WildReads</h2>
                    <button onClick={() => window.open("https://wertkg.axshare.com/#id=gvp28l&p=wildreads")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Wix - Portfolio</h2>
                    <button onClick={() => window.open("https://neelamchawla.wixsite.com/resume")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Road Trip</h2>
                    <button onClick={() => window.open("https://xd.adobe.com/view/7187ffc6-d69e-48c8-929e-2963df4a7521-24d4/screen/d1dd0585-d68d-4e93-940d-3a8f7694ee50/?fullscreen")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">InstructorHQ App</h2>
                    <button onClick={() => window.open("https://xd.adobe.com/view/27862607-43ee-4108-8035-e7f9df78046d-72d5/screen/dfe850cd-4fe1-4795-8edb-5b8e370d9d75?fullscreen")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Globe</h2>
                    <button onClick={() => window.open("https://xd.adobe.com/view/2c5b42b1-959c-490b-ad79-f4f0b3220c52-7908/?fullscreen")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Sneaker</h2>
                    <button onClick={() => window.open("https://sneakerzz.herokuapp.com/")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Prototype1} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype2} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype3} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype4} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype5} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype6} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype7} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype8} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype9} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype10} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype11} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype12} alt="proto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Prototype13} alt="proto" />
          </SwiperSlide> */}
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
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Photoshop - Mesh Tool Example</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Figma - Glassmorphism</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Photoshop - Book Mockup</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Photoshop - Book Mockup</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Photoshop - Book Mockup</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Photoshop - Cup Mockup</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Photoshop - Bottle Mockup</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Illustrator - Neuromorphic Button Design</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Illustrator - Logo Design</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Parallax Effect</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Dynamic Swatch Color</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Photoshop - YouTube Thumbnail Design</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">InDesign - Magazine Design</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Illustrator - Dual Tone Design</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Instagram Ads</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Illustrator - Letter head & Card</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Dynamic Count Down Clock</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            {/* <img src={React2} alt="React" /> */}
            <div className="imgCard">
                <div className="imgContent">
                    <h2 className="title">Glassmorphism Card</h2>
                    <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
                </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Ps1} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps2} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps3} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps4} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps5} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps6} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps7} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps8} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps9} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps10} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps11} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps12} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps13} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps14} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps15} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps16} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps17} alt="ps" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ps18} alt="ps" />
          </SwiperSlide> */}
         </Swiper>

      </>
    </div>
  );
};

export default Projects;
