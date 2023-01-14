import React from 'react'
import CourseTile from './CourseTile';
import Header from './Header'
import './Home.css';
import { Courses } from '../../Courses';

function Home() {
  return (
    <div className='home'>
        <Header/>
        <div className='container'>
        {
                Courses.map(
                    (course, index) => {
                        return (
                            <CourseTile
                                title = {course.title}
                                image = {course.images}
                                description = {course.description}
                                link = {course.link}
                            />
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default Home