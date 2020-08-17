import React from 'react';

import './game.styles.scss';

import Card from '../card/card.component';

const CARDS = [
  {
    id: 1,
    value: 1,
    isClicked: false,
    isMatched: false,

  },
  {
    id: 2,
    value: 1,
    isClicked: false,
    isMatched: false,
  },
  {
    id: 3,
    value: 2,
    isClicked: false,
    isMatched: false,
  },
  {
    id: 4,
    value: 2,
    isClicked: false,
    isMatched: false,
  },
  {
    id: 5,
    value: 3,
    isClicked: false,
    isMatched: false,
  },
  {
    id: 6,
    value: 3,
    isClicked: false,
    isMatched: false,
  },
];

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      clickedCards: [],
    }
  }

  componentDidMount () {
    const cards = CARDS.sort(() => 0.5 - Math.random());
    this.setState({ cards });
  }

  renderCards = () => {
    const { cards, clickedCards } = this.state;
  
    return cards.map(card => {
      const isClicked = clickedCards.some(clickedCard => clickedCard.id === card.id);

      return (
        <Card 
          key={card.id} 
          card={{...card, isClicked }}
          onClick={this.handleCardClick}
        />
      )
    })
  }

  handleCardClick = clickedCard => {
    const cards = this.state.cards;
    let clickedCards = this.state.clickedCards;

    clickedCards.push(clickedCard);

    if(clickedCards.length === 2) {
      // check if match
      if(clickedCards[0].value === clickedCards[1].value) {
        const filteredCards = cards.map(card => clickedCard.value === card.value ? {...card, isMatched: true} : card );
        
        this.setState({ cards: filteredCards, clickedCards: [] });
        return;
      } else {
        clickedCards = [];
      }
    } else if(clickedCards.length > 2) {
      clickedCards = clickedCards.filter(card => clickedCard.id !== card.id)
    }

    this.setState({ clickedCards });
  }

  render() {
    const cards = this.renderCards();

    return(
      <div>
        <h1>Memory Game</h1>
        <div className='cards'>
          {cards}
        </div>
      </div>
    );
  }
}

export default Game;