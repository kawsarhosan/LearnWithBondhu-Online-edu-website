import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';


const Courses = () => {
    const [courses, setCourses] =useState([]);
    useEffect(()=>{
        fetch('/fakadata1.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='my-5'>
           <div className='bg-myBg text-center py-5 text-white fw-bold'>
               <h1 className='fw-bold'>All Courses:</h1>
           </div>
           <div className='container '>
           <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
            {
                courses.map(course=> <Course
                key={course.id}
                course={course}
                ></Course>)
            }
            </div>

        </div>
           </div>
        
    );
};

export default Courses;