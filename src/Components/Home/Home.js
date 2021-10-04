import React from 'react';
import Counter from '../Counter/Counter';

import Hero from '../Hero/Hero';
import HomeCourses from '../HomeCourses/HomeCourses';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='container'>
                <Hero></Hero>
                <HomeCourses></HomeCourses>
                <Counter></Counter>
                <Subscribe></Subscribe>

            
            </div>
            
        
        </div>
    );
};

export default Home;