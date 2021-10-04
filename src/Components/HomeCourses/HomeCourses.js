import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './HomeCourses.css';

const Courses = () => {
    const [courses, setCourses] =useState([]);
    useEffect(()=>{
        fetch('/fakadata2.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="container my-5 py-5">
            <div className="text-center me-3">
                <h2 className ="custom-color fw-bold">Our Courses</h2>
                <p className="text-muted">To learn, to earn</p>
                <hr/>
            </div>
           
            <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
            {
                courses.map(course=> <Course
                course={course}
                ></Course>)
            }
            </div>
            <Button className='mx-auto d-block custom-btn border-0'>See more.</Button>
        </div>
    );
};

export default Courses;