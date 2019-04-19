import React from 'react';
import './index.css';

import Card from './Card';

const CardList = ({cards}) => {

  return(
    <div className="list-cards">
        {cards.map(card => <Card card={card} />)}
    </div>
  )
}

export default CardList;