import React from 'react';
import './Topic.css';

function Topic({name}) {
  return (
    <div className='topic'>
        {name}
    </div>
  )
}

export default Topic