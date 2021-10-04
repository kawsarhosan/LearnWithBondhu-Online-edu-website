import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className=' my-5'>
           <div className='bg-myBg text-center py-5 text-white fw-bold'>
               <h1 className='fw-bold'>Contact Us:</h1>
           </div>
           <div className='shadow-sm container border rounded my-5 w-50 p-5 '>
            <Form>
                {/* <!-- Name input --> */}
            <div class="form-outline mb-4">
                <input type="text" id="form4Example1" class="form-control" />
                <label class="form-label" for="form4Example1">Name</label>
            </div>

            {/* <!-- Email input --> */}
            <div class="form-outline mb-4">
                <input type="email" id="form4Example2" class="form-control" />
                <label class="form-label" for="form4Example2">Email address</label>
            </div>

            {/* <!-- Message input --> */}
            <div class="form-outline mb-4">
                <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                <label class="form-label" for="form4Example3">Message</label>
            </div>

            {/* <!-- Checkbox --> */}
            <div class="form-check d-flex justify-content-center mb-4">
                <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="form4Example4"
                checked
                />
                <label class="form-check-label" for="form4Example4">
                Send me a copy of this message
                </label>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" class="btn custom-btn d-block mx-auto btn-block mb-4">Send</button>
            </Form>

        </div>
           </div>
    );
};

export default Contact;