import React from 'react'
import './TabCarousel.css';
import Github from "./img/github.png";

function TabCarousel({darkMode}) {

  return (
    <div className='outerBox'><App darkMode={darkMode} /></div>
  )
}

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind CSS', 'React.Js', 'Angular', 'Vue.Js', 'Gatsby', 'UI/UX', 'SVG', 'Animation', 'MySql', 'MongoDB', 'Firebase', 'JavaScript', 'HTML', 'PHP - Laravel','Wordpress', 'Shopify', 'CSS', 'SASS', 'Tailwind CSS', 'Bootstrap', 'Kendo UI', 'Material UI', 'Firebase', 'Github', 'Netlify', 'Heroku', 'Asana', 'Trello', 'Jira', 'ZOHO', 'Slack'];
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

const Tag = ({text, color}) => (
  <div className='tag' style={{ '--color': color}}><span>#</span> {text}</div>
);
{/* <img src={text} alt="img"/> */}
const App = ({darkMode}) => (
  <>
    {/* <header>
      <h1>Infinite Scroll Animation</h1>
      <p>CSS only, content independent, bi-directional, customizable</p>
    </header> */}
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 37000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag} />
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade' style={{ background: darkMode ? "linear-gradient(90deg, black, transparent 30%, transparent 70%, black)" : "linear-gradient(90deg, white, transparent 30%, transparent 70%, white)" }} />
    </div>
  </>
);

export default TabCarousel;