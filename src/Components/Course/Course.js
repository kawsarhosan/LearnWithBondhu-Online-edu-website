import React from 'react';
import './Course.css';

const Course = (props) => {
    const {title, students, duration, instructor, img} = props.course;
    
    return (
                        
                <div className="col">
                    <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <div className='d-flex justify-content-between fs-6 text-muted'>
                            <p>{students} Students</p>
                            <p>{duration}</p>
                        </div>
                        <h5 className="card-title fw-bold custom-color">{title}</h5><br/>
                        <p className="card-text text-muted">By- {instructor}</p>
                    </div>
                    </div>
                </div>
            
            
    );
};

export default Course;