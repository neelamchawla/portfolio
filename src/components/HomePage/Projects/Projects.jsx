import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import { Swiper, SwiperSlide } from "swiper/react"
import ReactLogo from "../../img/logo/react-logo.png";
import AngularLogo from "../../img/logo/angular.png";
import VueLogo from "../../img/logo/vue.png";
import PrototypeLogo from "../../img/prototype.gif";
import MockupLogo from "../../img/mockup.gif";
import "./Projects.css";
import "swiper/css";
import './GalleryCard.css';

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <h4 style={{ color: darkMode ? 'white' : '' }}>Recent Projects</h4>
      <>
        <img src={ReactLogo} className="rotates" alt="reactlogo" />
        <span style={{ color: "#61DBFB" }}>React</span>
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
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">E-Commerce World</h2>
                <button onClick={() => window.open("https://neelamchawla.github.io/ecommerce/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Multiple Project</h2>
                <button onClick={() => window.open("https://multipleprojects.netlify.app/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">MovieLand</h2>
                <button onClick={() => window.open("https://moviezland.netlify.app/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Dashboard</h2>
                <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Website</h2>
                <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">YouTube Clone</h2>
                <button onClick={() => window.open("#")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Fan SignUp</h2>
                <button onClick={() => window.open("https://fansignup-react.netlify.app/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">API Based Data</h2>
                <button onClick={() => window.open("https://api-data-react.netlify.app/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Responsive Website</h2>
                <button onClick={() => window.open("https://neelams-react-practical.netlify.app/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ReactSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">API Based Data</h2>
                <button onClick={() => window.open("https://apibased-data.netlify.app/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
      <>
        <img src={AngularLogo} className="logo" />
        <span style={{ color: "#dd1b16" }}>Angular</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide className="AngularSlide spacsLeft">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Recipe Book</h2>
                <button onClick={() => window.open("https://recipe-book-72771.web.app/auth")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="AngularSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Road Trip</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/2.bd87e7da4479cf917511.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
      <>
        <img src={VueLogo} className="logo" />
        <span style={{ color: "#42b883" }}>Vue</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide className="VueSlide spacsLeft">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Todo List</h2>
                <button onClick={() => window.open("https://taskz-tracker.netlify.app/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="VueSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Todo List</h2>
                <button onClick={() => window.open("https://taskz-tracker.netlify.app/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
      {/* Prototype */}
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
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Twitter Clone</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/1.c18de2f79b9606ccc8de.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Instagram Clone</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/2.007d3b39924b96103a04.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Wonderlust</h2>
                <button onClick={() => window.open("https://glassmorphism-web.netlify.app/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Coffee Mania</h2>
                <button onClick={() => window.open("https://fqjhuc.axshare.com/#id=o72945&p=menu")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Sign Up</h2>
                <button onClick={() => window.open("https://hmgx5l.axshare.com/#id=w451u3&p=sign_up&sc=2&g=1")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Cafe App</h2>
                <button onClick={() => window.open("https://www.figma.com/proto/hjIMroYoFQfEFvAkzmstqK/Donuts%26Drinks?node-id=1%3A2&scaling=scale-down")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Unchanted Path</h2>
                <button onClick={() => window.open("https://4gg6mg.axshare.com/#id=gvp28l&p=unchartedpath")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">WildReads</h2>
                <button onClick={() => window.open("https://wertkg.axshare.com/#id=gvp28l&p=wildreads")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Wix - Portfolio</h2>
                <button onClick={() => window.open("https://neelamchawla.wixsite.com/resume")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Road Trip</h2>
                <button onClick={() => window.open("https://xd.adobe.com/view/7187ffc6-d69e-48c8-929e-2963df4a7521-24d4/screen/d1dd0585-d68d-4e93-940d-3a8f7694ee50/?fullscreen")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">InstructorHQ App</h2>
                <button onClick={() => window.open("https://xd.adobe.com/view/27862607-43ee-4108-8035-e7f9df78046d-72d5/screen/dfe850cd-4fe1-4795-8edb-5b8e370d9d75?fullscreen")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Globe</h2>
                <button onClick={() => window.open("https://xd.adobe.com/view/2c5b42b1-959c-490b-ad79-f4f0b3220c52-7908/?fullscreen")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="PrototypeSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Sneaker</h2>
                <button onClick={() => window.open("https://sneakerzz.herokuapp.com/")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
      {/* MockupLogo */}
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
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Photoshop - Mesh Tool Example</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/1.6d608939ec97586f7fb5.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Figma - Glassmorphism</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/2.1a76b7d030d539e4dac2.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Photoshop - Book Mockup</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/3.0363e689d5a4c04ba83f.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Photoshop - Book Mockup</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/4.7e4ecc1e64df57c78150.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Photoshop - Book Mockup</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/5.d1c535e0d269822938e3.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Photoshop - Cup Mockup</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/6.32b90805e0eb2cbf9f09.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Photoshop - Bottle Mockup</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/7.01d0531da5c0db322ecc.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Illustrator - Neuromorphic Button Design</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/8.df426bca28d465f6d730.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Illustrator - Logo Design</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/9.ac098050833c21a66dba.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Parallax Effect</h2>
                <button onClick={() => window.open("https://glassmorphism-web.netlify.app/#tour")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Glassmorphism Card</h2>
                <button onClick={() => window.open("https://glassmorphism-web.netlify.app/#team")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Dynamic Count Down Clock</h2>
                <button onClick={() => window.open("https://glassmorphism-web.netlify.app/#ComingSoon")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Dynamic Swatch Color</h2>
                <button onClick={() => window.open("https://glassmorphism-web.netlify.app/#products")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Photoshop - YouTube Thumbnail Design</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/12.195c4f175c00e3def30f.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">InDesign - Magazine Design</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/13.d43ebbcf4723fc12db97.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Illustrator - Dual Tone Design</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/14.8727de5c72acaf00b63b.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Instagram Ads</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/15.1ff6a258d1f784de5e3d.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="MockupSlide">
            <div className="imgCard">
              <div className="imgContent">
                <h2 className="title">Illustrator - Letter head & Card</h2>
                <button onClick={() => window.open("https://neelams-portfolio.netlify.app/static/media/16.3eac4d27c5cd4c7e2183.png")} target="_blank" className="btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Projects;
