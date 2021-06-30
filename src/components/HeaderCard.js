import React from 'react';

function HeaderCard(props) {
  return (
    <>
      <div className='cards__header'>
          <h4 className='cards__header__title'>{props.title}</h4>
          <div className='cards__header__info'>
            <p>{props.text}</p>
            <button>{props.btn}</button>
          </div>
      </div>
    </>
  );
}

export default HeaderCard;
