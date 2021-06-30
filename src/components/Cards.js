import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Work with THINK OF IT!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/r2t_3.jpg'
              text="It’s high time that the suppressed talents get uplifted, education be skill-enriched and young crops get nurtured, aligned with their regular curriculum.
              TOI attempts to promote holistic development and provide formative skill-development modules and opportunities."
              label='Reach to Teach'
              path=''
            />
            <CardItem
              src='images/rad2.jpg'
              text="Join hands and help TOI to Raise a Dream of impoverished talented children by providing them the access to your platform/network and with continuous assistance from our fellows.
              Help TOI raise a million dreams."
              label='Raise a Dream'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
