import React from 'react';
import Angular from "../../../img/logo/angular.png";
import Bootstrap from "../../../img/logo/bootstrap.png";
import CSS3 from "../../../img/logo/css3.png";
import FireBase from "../../../img/logo/firebase.png";
import Gatsby from "../../../img/logo/gatsby.png";
import Github from "../../../img/logo/github.png";
import Heroku from "../../../img/logo/heroku.png";
import JSX from "../../../img/logo/jsx.png";
import KendoUI from "../../../img/logo/kendoUI.png";
import MongoDB from "../../../img/logo/mongodb.png";
import MUI from "../../../img/logo/MUI.png";
import MySQL from "../../../img/logo/MySQL.png";
import Netlify from "../../../img/logo/netlify.png";
import Sass from "../../../img/logo/sass.png";
import Shopify from "../../../img/logo/Shopify.png";
import TailwindCss from "../../../img/logo/tailwindcss.png";
import ReactJs from "../../../img/logo/react-logo.png";
import Vue from "../../../img/logo/vue.png";
import Wordpress from "../../../img/logo/Wordpress.png";
import './TabCarousel.css';

function TabCarousel({darkMode}) {

  return (
    <div className='outerBox'><App darkMode={darkMode} /></div>
  )
}

const TAGS = [ ReactJs, Angular, Vue, Shopify, Wordpress, Github, Bootstrap, CSS3, FireBase, Gatsby, Heroku, JSX, KendoUI, MongoDB, MUI, MySQL, Netlify, Sass, TailwindCss ];
const DURATION = 25000;
const ROWS = 3;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({text, color, darkMode}) => (
  <div className='tag' style={{ '--color': color, boxShadow: darkMode ? "0px 7px 10px #8492a68c" : "0px 7px 10px #030b168c" }}>
    <img
        src={text}
        height={70}
        width={70}
        alt={text}
      />
    </div>
);

const App = ({darkMode}) => (
  <>
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 37000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag darkMode={darkMode} text={tag} key={tag} />
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade' style={{ background: darkMode ? "linear-gradient(90deg, black, transparent 30%, transparent 70%, black)" : "linear-gradient(90deg, white, transparent 30%, transparent 70%, white)" }} />
    </div>
  </>
);

export default TabCarousel;