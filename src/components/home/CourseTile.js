import React from 'react'
import {Link} from 'react-router-dom';
import './CourseTile.css';

function CourseTile({title, image, description}) {
  return (
    <div className = 'course'>
            <div className='course__info'>
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
            </div>
            
            <img src={image}/>
        </div>
  )
}

export default CourseTile