import React from 'react';
import '../App.css';
import './HeaderSection.css';
import HeaderCard from './HeaderCard';

function HeaderSection() {
  const images = ["../public/images/img-1.jpg", "../public/images/img-2.jpg", "../public/images/img-3.jpg"];

function Slideshow() {
  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        {images.map((backgroundImage, index) => (
          <div className="slide" key={index} style={{ backgroundImage }}/>
        ))}
      </div>
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div key={idx} className="slideshowDot"></div>
        ))}
      </div>
    </div>
  );
}
  return (
    <div className='header'>
      <h1>RE-DRIVE THE WORLD</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <HeaderCard
              title="LET'S THINK OF IT!"
              text='Be a part of the largest community of youth changemakers. 
              Get your voice heard. Lead the change for an impact.
              Channelize dreams and steer young minds with YOUTH LEADERSHIP to create an impact by taking the road less travelled.'
              btn='KNOW MORE'
            />
            <HeaderCard
              title="MAKE YOUR CITY COUNT"
              text='Tune the present and let the fire of the youth in your city burst into a spectacular flare by registering your city chapter.'
              btn='GET STARTED'
            >
            </HeaderCard>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
