import React from 'react'
import {Link} from 'react-router-dom';
import './CourseTile.css';

function CourseTile({title, image, description, link}) {
  return (
    <div className = 'course'>
            <div className='course__info'>
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
            </div>
            
            <img src={image}/>
            
            <Link to = {link}>
                <button className='course__button'>Go to Course!</button>
            </Link>
                
        </div>
  )
}

export default CourseTile