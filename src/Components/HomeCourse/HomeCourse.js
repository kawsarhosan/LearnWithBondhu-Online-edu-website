import React from 'react';

const HomeCourse = (props) => {
    const {title, student, duration, instructor, img} = props.course;
    
    return (
                        
                <div class="col">
                    <div class="card h-100">
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
            
            
    );
};

export default HomeCourse;