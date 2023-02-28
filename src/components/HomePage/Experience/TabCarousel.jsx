import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const CARDS = 4;
const MAX_VISIBILITY = 2;

const Card = ({ title, content, years, desc }) => (
  <div className='TabCard'>
    <h2>{title}</h2>
    <p style={{ fontStyle: "italic" }}>{content}</p>
    <p>{years}</p>
    <p>{desc}</p>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <div className='carousel'>
      {active > 1 && <button className='navTab left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline size={50} /></button>}
      {React.Children.map(children, (child, i) => (
        <div className='TabCard-container' style={{
          '--active': i === active ? 1 : 0,
          '--offset': (active - i) / 3,
          '--direction': Math.sign(active - i),
          '--abs-offset': Math.abs(active - i) / 3,
          'pointerEvents': active === i ? 'auto' : 'none',
          'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}>
          {child}
        </div>
      ))}
      {active < count - 2 && <button className='navTab right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline size={50} /></button>}
    </div>
  );
};

const TabCarousel = () => (
  <div className='app'>
    <div className="t-main" style={{ position: 'absolute', marginTop: '-10px' }}>
      <span >
        Work Experience
      </span>
    </div>
    <Carousel>
      <Card />
      <Card title='Software Developer' content='OpenEyes Technologies Inc.' years='Dec 2021 - Dec 2022' desc="Working on project based on React and Angular with Kendo-UI for Front-end and for back-end PHP - Laravel. Also worked on chrome extension for one of the project. Github repository for code management. And, to deploy the websites used Jenkins." />
      <Card title='Software Engineer' content='Future Link Consultants' years='Sep 2020 - Nov 2021' desc="Projects based on React, Shopify and WordPress. For styling we have used Material UI. Firebase features and Stripe, used to process payments in website." />
      <Card title='Jr. Software Engineer' content='CodeZeros' years='Jan 2020 - Aug 2020' desc="Projects based on ReactJs. Redux, Saga, SASS, Material UI, Bootstrap, Firebase, Stripe, Github are some of the functions used in the projects." />
      <Card title='Web Designer' content='Padmavati Online Services' years='Jun 2017 - Feb 2019' desc="Planning site designs, functionality and navigation. Building wireframes & prototypes which were then turned into functional and responsive digital products. Reviewing UX with multiple teams and making necessary edits. Handling all composition, color, illustration, typography, and branding for projects. " />
      <Card />
    </Carousel>
  </div>
);

export default TabCarousel;
