import React, { useState, useEffect } from 'react';
import ListColumn from '../ListColumn';

const SAMPLE_COLUMNS = [{
  title: 'Goals',
  id: 1,
  cards: [
    {
      title: 'Я карта',
      id: 1,
    },
  ]
},{
  title: 'In progress',
  id: 2,
  cards: [
    {
      title: 'Я не карта',
      id: 1,
    },
    {
      title: 'Я карта',
      id: 2,
    },
  ]
}];

const ColumnContainer = () => {

  const [columns, setColumns] = useState(SAMPLE_COLUMNS);
  
  return(
    <>
      {columns.map(column =>
        <ListColumn column={column} />)}
    </>
  )
}

export default ColumnContainer;