import React from 'react'
import {Link} from 'react-router-dom';
import './CourseTile.css';

function CourseTile({title, image, description, link}) {
  return (
    <div className = 'course'>
      <Link to={link}>
        <div className='course__info'>
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
        </div>
        
        <img className = 'image' src={image}/>
      </Link> 
    </div>
  )
}

export default CourseTile