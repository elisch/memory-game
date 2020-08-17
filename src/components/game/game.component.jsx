import React from 'react';

import './game.styles.scss';

import Card from '../card/card.component';

const CARDS = [
  {
    id: 1,
    value: 1
  },
  {
    id: 2,
    value: 1
  },
  {
    id: 3,
    value: 2
  },
  {
    id: 4,
    value: 2
  },
  {
    id: 5,
    value: 3,
  },
  {
    id: 6,
    value: 3
  },
];

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    }
  }

  componentDidMount () {
    const cards = CARDS.sort(() => 0.5 - Math.random());
    this.setState({ cards });
  }

  renderCards = () => {
    const { cards } = this.state;
  
    return cards.map(card => (
      <Card key={card.id} card={card} />
    ));
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