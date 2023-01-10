import React, { useState, useEffect, useContext } from "react";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Vector2.png";
import girl from "../../../img/girl5.png";
import Tech from "../../../img/tech.png";
import thumbup from "../../../img/thumbup.png";
import crown from "../../../img/crown.png";
import FloatinDiv from "./FloatingDiv/FloatingDiv";
import Github from "../../../img/logo/github.png";
import LinkedIn from "../../../img/logo/linkedin.png";
import "./Home.css";

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
  const toRotate = [ "Software Development", "Web Development", "UI / UX Design",  "Web Design", "Graphic Design" ];
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

  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX - 25);
    setCursorY(e.pageY - 25);
  });

  return (
    <div style={{ backgroundImage: darkMode ? containerStyle : "" }} className="Home" id="Home">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I'm</span>
          <span>Neelam Chawla</span>
          <span>A React developer with a passion for building intuitive and user-friendly web applications.</span>
          <span>
            Experienced in:
          </span>
          <span className="wrap">{text}</span>
        </div>
        <div className="i-icons">
          <a href="https://github.com/neelamchawla">
            <img src={Github} alt="git" />
          </a>
          <a href="https://www.linkedin.com/in/neelam-r/">
            <img src={LinkedIn} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vec1" />
        <img src={Vector2} alt="vec2" />
        <img src={girl} alt="girl" />
        {/* animation */}
        <motion.img
          initial={{ left: "-39%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={crown}
          alt="transition"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "60%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv
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

      <div className="cursor"
      style={{ 
        left: cursorX + 'px',
        top: cursorY + 'px'
       }}
      ></div>
    </div>
  );
};

export default Home;
