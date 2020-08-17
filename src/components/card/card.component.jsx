import React from 'react';

import './card.styles.scss';

const Card = ({ card, onClick }) => {
  const { value, isMatched, isClicked } = card; 

  return (
    <div 
      className={`${isClicked ? 'clicked' : ''} ${isMatched ? 'matched' : ''} card`} 
      onClick={() => onClick(card)}
    >
      {value}
      {isMatched ? 'hurra' : ''}
      {isClicked ? 'clicked' : ''}
    </div>
  );
}

export default Card;