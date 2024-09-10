import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

// const CARDS = 4;
const MAX_VISIBILITY = 2;

const jobDetails = [
  {
    id: 3,
    title: 'DX Engineer',
    company: 'Horizontal Digital',
    years: 'Jul 2023 - Present',
    desc: 'Engineered high-performance web solutions with ReactJS and Next.js. Leveraged Sitecore and JSS for  complex web applications and Azure DevOps for streamlined deployment and collaboration.',
  },
  {
    id: 2,
    title: 'Software Developer',
    company: 'OpenEyes Technologies Inc.',
    years: 'Dec 2021 - Jun 2023',
    desc: 'Built scalable web applications with ReactJS and AngularJS, utilizing Kendo-UI and Material-UI for rich interfaces. Employed REST APIs and GitHub for efficient development and version control.',
  },
  {
    id: 1,
    title: 'Web Developer',
    company: 'Future Link Consultants',
    years: 'Sep 2017 - Nov 2021',
    desc: 'Leveraged my expertise in PHP, JavaScript, React, Laravel, and WordPress to enhance and maintain web applications supporting international student visa and immigration services. My role involved collaborating with cross-functional teams to develop and implement effective digital solutions tailored to the needs of our clients and students.',
  },
]

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
      {jobDetails.map((data, id) => 
        <Card key={id} className="card-text" title={data.title} content={data.company} years={data.years} desc={data.desc} />
      )}
      <Card />
    </Carousel>
  </div>
);

export default TabCarousel;
