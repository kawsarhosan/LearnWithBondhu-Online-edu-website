import React from 'react';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import HomeCourses from '../HomeCourses/HomeCourses';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='container'>
                <Hero></Hero>
                <HomeCourses></HomeCourses>

            
            </div>
            
        <Footer></Footer>
        </div>
    );
};

export default Home;