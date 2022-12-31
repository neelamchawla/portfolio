import React from 'react';
// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProjectsCard.css';

function ProjectsCard() {
  return (
    <>
    <div className='categoryHead'>
        <h1 >Choose you are looking for</h1>
    </div>

        <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={3000}
        centerMode={true}
        className="category"
        containerClass="container-padding-bottom"
        dotListClass=""
        draggable
        focusOnSelect
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
            },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
            },
            tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
            }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        // showDots
        sliderClass=""
        slidesToSlide={1}
        // swipeable
        >
        <div className='tabs'>
            <span style={{ marginTop: '10px' }}>Auto Mobile</span>
            <img
                description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
                headline="w3js.com - web front-end studio"
                src="https://th.bing.com/th/id/R.f50da2cf04c47b511d620613f59c4ff1?rik=whg%2bV6ztvy3h%2bw&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fLcd%2foap%2fLcdoap7xi.png&ehk=X%2bhT%2fhdhkH5ns25UA5vYSUtF%2fGouIYXkeiws5GLiDwQ%3d&risl=&pid=ImgRaw&r=0"
                style={{ width: '120px' }}
                />
        </div>
        <div className='tabs'>
            <span style={{ marginTop: '-38px' }}>Gardening</span>
            <img
                description="React Carousel with Server Side Rendering Support – Part 2"
                headline="w3js.com - web front-end studio"
                style={{ width: '120px' }}
                src="https://i.pinimg.com/originals/44/07/ba/4407bae3fbfe069c803e319eefe20377.png"
                />
        </div>
        <div className='tabs'>
            <span style={{ marginTop: '4px' }}>Home & Furnicture</span>
        <img
            description="React Carousel with Server Side Rendering Support – Part 2"
            headline="w3js.com - web front-end studio"
            src="https://th.bing.com/th/id/R.69d99f21da5fa09f47ad30e66885a1df?rik=2iXj8ZPtg4rl%2fg&riu=http%3a%2f%2fsweetclipart.com%2fmultisite%2fsweetclipart%2ffiles%2fsofa_beige.png&ehk=EO0Y%2bFnB62U8WXK%2fAcuyO2zq3qo3UY%2bJtUpTjs17rDg%3d&risl=&pid=ImgRaw&r=0"
            style={{ width: '120px' }}
            />
        </div>
        <div className='tabs'>
            <span style={{ marginTop: '-6px' }}>DIY Furnicture</span>
        <img
            description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
            headline="w3js.com - web front-end studio"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79313/bedroom-clipart-md.png"
            style={{ width: '120px' }}
            />
        </div>
        <div className='tabs'>
            <span style={{ marginTop: '-40px' }}>Canon</span>
        <img
            description="React Carousel with Server Side Rendering Support – Part 1"
            headline="w3js.com - web front-end studio"
            src="https://th.bing.com/th/id/R.9d98a010e51ecc114da56b1a0364a93b?rik=BsZjWgZOdCxESQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcamera-clipart-transparent-background%2fcamera-clipart-transparent-background-21.png&ehk=tqpG87vQclbO0EMG4krBLUS5g98mmxSo6wbY98%2bsQhU%3d&risl=&pid=ImgRaw&r=0"
            style={{ width: '120px' }}
            />
        </div>
        <div className='tabs'>
            <span style={{ marginTop: '-37px' }}>Tablets</span>
        <img
            description="React Carousel with Server Side Rendering Support – Part 2"
            headline="w3js.com - web front-end studio"
            src="https://th.bing.com/th/id/R.22011cc06f479cdc0713a2b90a25ee7c?rik=UjB6HpwIlDOY%2bA&riu=http%3a%2f%2fclipartmag.com%2fimages%2ftablet-computer-clipart-34.png&ehk=x4KDmxi4TWnQeGtdCKxDOPyCK41SJmWUsQ7pkGuzebk%3d&risl=&pid=ImgRaw&r=0"
            style={{ width: '120px' }}
            />
        </div>
        <div className='tabs'>
            <span style={{ marginTop: '-37px' }}>Clothing</span>
        <img
            description="React Carousel with Server Side Rendering Support – Part 2"
            headline="w3js.com - web front-end studio"
            src="https://th.bing.com/th/id/OIP.Wl_6bwRuEPVDATIkM2G-fwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            style={{ width: '120px' }}
            />
        </div>
        <div className='tabs'>
            <span style={{ marginTop: '-37px' }}>Jewellery</span>
        <img
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            src="https://th.bing.com/th/id/OIP.lFaQQHvJ59LQxiBl84fMRgAAAA?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            style={{ width: '120px' }}
            />
        </div>
        <div className='tabs'>
            <span style={{ marginTop: '-40px' }}>Speakers</span>
        <img
            description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
            headline="w3js.com - web front-end studio"
            src="https://th.bing.com/th/id/OIP.3kX-vqqniBDmA6to1nT1FQHaId?w=175&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            style={{ width: '120px' }}
        />
        </div>
        </Carousel>
      <div className='fade' />

    </>
  )
}

export default ProjectsCard;