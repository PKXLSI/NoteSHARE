import React from 'react'
import CourseTile from './CourseTile';
import Header from './Header'
import './Home.css';
import { Courses } from '../../Courses';
import SearchIcon from '@mui/icons-material/Search';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useState } from 'react';

function Home() {
    const [courseList, setCourseList] = useState(Courses);

    function findElements(){
        const newList = [];
        for(let i = 0; i < Courses.length; i++){
            if(Courses[i].title.toLowerCase().includes(document.getElementById('search').value.toLowerCase())){
                newList.push(Courses[i]);
            }
        }

        setCourseList(newList);
    }

    function resetElements(){
        setCourseList(Courses);
    }

    return (
        <div className='home'>
            <Header/>
            <div className='navigation'>
                <input type={'text'} placeholder={'INPUT'} className = 'search__bar' id = 'search'></input>
                <button className='specific' onClick={findElements}><SearchIcon/></button>
                <button className='specific' onClick={resetElements}><DisabledByDefaultIcon/></button>
            </div>
            <div className='container'>
            {
                    courseList.map(
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