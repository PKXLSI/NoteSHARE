import React from 'react'
import CourseTile from './CourseTile';
import Header from './Header'
import './Home.css';
function Home() {
  return (
    <div className='home'>
        <Header/>
        <div className='container'>
            <CourseTile
                image={'https://www.bing.com/th?id=OIP.LLmKRSguG7jQjnQZiGOMGgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'}
                title={'Notes'}
                link={'/'}
                description={'TEST'}
            />
            <CourseTile
                image={'https://www.bing.com/th?id=OIP.LLmKRSguG7jQjnQZiGOMGgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'}
                title={'Notes'}
                link={'/'}
                description={'TEST'}
            />
            <CourseTile
                image={'https://www.bing.com/th?id=OIP.LLmKRSguG7jQjnQZiGOMGgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'}
                title={'Notes'}
                link={'/'}
                description={'TEST'}
            />
        </div>
    </div>
  )
}

export default Home