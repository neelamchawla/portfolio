import React, { useState, useEffect, useContext } from "react";
import "./Home.css";
import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Vector2.png";
import girl from "../../../img/girl5.png";
// import glassesimoji from "../../../img/glassesimoji.png";
import Tech from "../../../img/tech.png";
import thumbup from "../../../img/thumbup.png";
import crown from "../../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../../img/github.png";
import LinkedIn from "../../../img/linkedin.png";
// import Instagram from "../../../img/instagram.png";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // text animation
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Development", "UI / UX Design",  "Web Design", "Graphic Design" ];
  const period = 700;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, index])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const containerStyle = {
    backgroundImage:
      "url(../../../img/banner-bg.png)",
    width: "600px",
    height: "600px",
  };

  return (
    <div style={{ backgroundImage: darkMode ? containerStyle : "" }} className="Home" id="Home">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Neelam Chawla</span>
          <span>
            Fullstack Web Developer with high level of experience 
            on React, Angular, Vue <br/>
            Also, have good knowledge of Figma, Webflow, AxureRP, Adobe: Xd, Ps, Ai, Id
          </span>
          {/* <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'> */}
            <span className="wrap">{text}</span>
          {/* </span> */}
        </div>
        {/* <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact</button>
        </Link> */}
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/neelamchawla">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/neelam-r/">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={girl} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-39%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          // src={thumbup}
          alt=""
        />
        {/* <motion.div
          initial={{ top: "-9%", left: "-15%" }}
          whileInView={{ left: "-5%" }}
          transition={transition}
          className="floating-div"
          
        >
          <FloatinDiv 
            img={thumbup}
            text1="Trending" text2="Web Dev Tech"
            style={{
              // padding: "0px !important",
              height: "9rem",
              width: "100%",
              // borderRadius: "50%",
            }} />
        </motion.div> */}
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "60%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv 
            // img={crown}
            // text1="Web" text2="Developer" 
            img={Tech}
            text1="Creative" text2=" UI / UX Experience"
          />
        </motion.div>
        <motion.div
          initial={{ left: "-10rem", top: "11rem" }}
          whileInView={{ left: "-5rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv
           img={thumbup}
           text1="Trending" text2="Web Development" text3="Technology"
          />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)", zIndex: "0" }}></div>
        <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
      
      </div>
    </div>
  );
};

export default Home;