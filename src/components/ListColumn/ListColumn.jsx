import React, { useState, useEffect } from 'react';
import CardListPreview from '../CardListPreview';

import './index.css';

const ListColumn = ({column}) => {
  return(
    <div className="column-wrapper" key={column.id}>
      <div className="column">
        <CardListPreview column={column}/>
      </div>
    </div>
  )
}

export default ListColumn;