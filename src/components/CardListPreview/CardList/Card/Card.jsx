import React from 'react';

const Card = ({card}) => {

  return(
    <div className="list-card" key={card.id}>
      <div className="list-card-details">
        {card.title}
      </div>
    </div>
  )
}

export default Card;