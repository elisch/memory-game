import React from 'react';

import './card.styles.scss';

const Card = ({ card }) => {
  const { value } = card; 

  return (
    <div className='card'>
      {value}
    </div>
  );
}

export default Card;