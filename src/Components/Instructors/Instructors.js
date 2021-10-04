import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [Instructors, setInstructors] =useState([]);
    useEffect(()=>{
        fetch('/instructor.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[]);
    return (
        <div className='my-5'>
           <div className='bg-myBg text-center py-5 text-white fw-bold'>
               <h1>Instructors:</h1>
           </div>
           <div className='container '>
           <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
            {
                Instructors.map(instructor => <Instructor
                key={Instructor.name}
                instructor={instructor}
                ></Instructor>)
            }
            </div>

        </div>
           </div>
    );
};

export default Instructors;