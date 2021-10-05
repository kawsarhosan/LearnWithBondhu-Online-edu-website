import React from 'react';
import './Counter.css'

const Counter = () => {
    return (
        <div>
            <section className="counter">
        <div className="counter-div d-lg-flex justify-content-between custom-color2">
            <div className="count-content">
                <h2>50125</h2>
                <p>Students</p>
            </div>
            <div className="count-content">
                <h2>52</h2>
                <p>Instructors</p>
            </div>
            <div className="count-content">
                <h2>112</h2>
                <p>Courses</p>
            </div>

        </div>

    </section>
        </div>
    );
};

export default Counter;