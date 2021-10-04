import React from 'react';
import './Course.css';

const Course = (props) => {
    const {title, students, duration, instructor, img} = props.course;
    
    return (
                        
                <div className="col">

                    <div className='card-group h-100 shadow-sm'>
                    <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <div className='d-flex justify-content-between fs-6 text-muted'>
                            <p>{students} Students</p>
                            <p>{duration}</p>
                        </div>
                        <h5 className="card-title fw-bold custom-color">{title}</h5><br/>
                       <div className='card-footer d-flex justify-content-between align-items-center'>
                            <p className="card-text text-muted">By- {instructor}</p>
                            <p><button className="btn custom-btn2">Enroll Now</button></p>
                       </div>
                    </div>
                    </div>
                    </div>
                </div>
            
            
    );
};

export default Course;