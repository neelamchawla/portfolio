import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';
// import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
// import { IconName } from "react-icons/ti";
import "./TabCarousel.css";

const CARDS = 5;
const MAX_VISIBILITY = 2;

const Card = ({title, content, years, desc}) => (
  <div className='TabCard'>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>{years}</p>
    <p>{desc}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='navTab left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline size={50} /></button>}
      {React.Children.map(children, (child, i) => (
        <div className='TabCard-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='navTab right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline size={50} /></button>}
    </div>
  );
};

const TabCarousel = () => (
  <div className='app'>
    <Carousel>
      {/* {[...new Array(CARDS)].map((_, i) => ( */}
        <Card title='Web Developer' content='OpenEyes Technologies Inc.' years='Dec 2021 - Present' desc='I was having a responsibility of handling end-to-end website development. Assisted two teams of five employees each. Worked on WordPress websites. Assisted in maintaining program code to meet system requirements. Worked on Jenkins for Web hosting, user access, website backup, and updating.' />
        <Card title='Web Developer' content='OpenEyes Technologies Inc.' years='Dec 2021 - Present' />
        <Card title='Web Developer' content='OpenEyes Technologies Inc.' years='Dec 2021 - Present' />
        <Card title='Web Developer' content='OpenEyes Technologies Inc.' years='Dec 2021 - Present' />
      {/* ))} */}
    </Carousel>
  </div>
);

export default TabCarousel;