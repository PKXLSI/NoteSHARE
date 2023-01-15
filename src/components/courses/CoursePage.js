import React from 'react';
import './CoursePage.css';
import Topic from './Topic';
import { CourseTopics } from '../../CourseTopics';
import { useState, useEffect } from 'react';
import Content from './Content';
import { Link } from 'react-router-dom';
function CoursePage({id, title}) {
  const [topic, setTopic] = useState('Integrals');
  
  function changeTopic(course){
    setTopic(course);
  }

  const myList = CourseTopics[id];
  return (
    <div className='course__page'>
        <div className='title'>{title} ~ {topic}</div>
        <div className='container'>
            <div className='topics'>
                {
                  myList.map(
                    (course, index) => {
                      return (
                          <button onClick={() => changeTopic(course)}>{course}</button>
                      )
                  }
                  )
                }
                <Link to="/">
                  <button onclick="window.location.href='./'">HOME</button>
                </Link>
            </div>
            <div className='content'>
              <Content
                course={id}
                topic={topic}
              />
            </div>
        </div>
    </div>
  )
}

export default CoursePage