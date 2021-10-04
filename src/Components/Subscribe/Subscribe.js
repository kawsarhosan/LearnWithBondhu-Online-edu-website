import React from 'react';
import { Form } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <Form className='bg-myBg'>
            {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
        {/* <!-- Section: Form --> */}
        <section className="">
          <form action="">
            {/* <!--Grid row--> */}
            <div className="row d-flex justify-content-center">
              {/* <!--Grid column--> */}
              <div className="col-auto">
                <p className="pt-2 text-white">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* <!--Grid column--> */}
      
              {/* <!--Grid column--> */}
              <div className="col-md-5 col-12">
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input placeholder='Enter your email...' type="email" id="form5Example2" className="form-control" />
                
                </div>
              </div>
              {/* <!--Grid column--> */}
      
              {/* <!--Grid column--> */}
              <div className="col-auto">
                {/* <!-- Submit button --> */}
                <button type="submit" className="btn custom-btn text-white mb-4">
                  Subscribe
                </button>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </form>
        </section>
        {/* <!-- Section: Form --> */}
      </div>
      {/* <!-- Grid container --> */}</Form>
        
    );
};

export default Subscribe;