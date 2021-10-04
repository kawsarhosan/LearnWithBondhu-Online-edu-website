import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='container hero'>
            <div className='d-flex justify-content-around align-items-center'>
                <div >
                    <h1 className="fw-bold custom-color">Learn online,</h1>
                    <h5>Build your future in learing.</h5>
                    <p className="text-muted">“We now accept the fact that learning is a lifelong<br/> process of keeping abreast of change. And the most<br/> pressing task is to teach people how to learn.”<br/> – Peter Drucker</p>
                </div>
                <div>
                    <img className="w-100" src="/img/hero/io2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;