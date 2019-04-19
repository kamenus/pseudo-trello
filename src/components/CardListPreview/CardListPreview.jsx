import React from 'react';
import './index.css';
import CardList from './CardList';

const CardListPreview = ({column}) => {
  return(
    <div className="list column-content">
      <div className="list-header">
        {column.title}
      </div>

      <CardList cards={column.cards}/>
      
      <div className="list-footer">
        <span className="list-footer-add-button">Add new card</span>
      </div>
    </div>
  )
}

export default CardListPreview;