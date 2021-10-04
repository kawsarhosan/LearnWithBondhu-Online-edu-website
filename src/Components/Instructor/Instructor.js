import React from 'react';

const Instructor = (props) => {
    const {name,img, position, country} =props.instructor;
    return (
        <div className="col">
                    <div className="card h-100">
                    <img src={img} className="card-img-top rounded-circle w-50 mx-auto mt-5" alt="..."/>
                    <div className="card-body text-center">
                        
                        <h4 className="card-title fw-bold custom-color2">{name}</h4>
                        <p className="card-text text-muted">{position}</p>
                        <p className="card-text text-muted">{country}</p>
                    </div>
                    </div>
                </div>
    );
};

export default Instructor;