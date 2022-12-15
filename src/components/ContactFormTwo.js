import React, { useRef } from 'react';
import { Row, Col } from 'reactstrap';
import emailjs from '@emailjs/browser';

const ContactFormTwo = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='col-sm-9 me-2'>
            <Row>
                <Col>
                    <label className='m-2'>Name</label>
                    <input type="text" name="user_name" aria-label='name' required='required'/>
                </Col>
                <Col>
                    <label className='m-2'>Email</label>
                    <input type="email" name="user_email" aria-label='email' required='required' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='m-2'>I am a:</label>
                    <select name='customer_type' aria-label='customer_type' required='required'>
                        <option name='customer_type' value=''>Select one</option>
                        <option name='customer_type' value='Homeowner'>Homeowner</option>
                        <option name='customer_type' value='Renter'>Renter</option>
                        <option name='customer_type' value='Realtor'>Realtor</option>
                        <option name='customer_type' value='Property Manager'>Property Manager</option>
                        <option name='customer_type' value='HOA Manager/Member'>HOA Manager/Member</option>
                        <option name='customer_type' value='Office Manager'>Office Manager</option>
                        <option name='customer_type' value='Other'>Other</option>
                    </select>
                </Col>
                <Col>
                    <label className='m-2'>I am interested in (check all that apply):</label><br />
                    <div className='ms-3' aria-label='service'>
                        <input type='checkbox' name='service' value='Moving services' />
                        <label htmlFor='moving' className='ms-2' aria-label='service'>Moving Services</label><br />
                        <input type='checkbox' name='service' value='Packing services' />
                        <label htmlFor='packing' className='ms-2' aria-label='service'>Packing Services</label><br />
                        <input type='checkbox' name='service' value='Trash'></input>
                        <label htmlFor='trash' className='ms-2' aria-label='service'>Trash/Junk Removal</label><br />
                        <input type='checkbox' name='service' value='Pickup/Delivery' />
                        <label htmlFor='pickup' className='ms-2' aria-label='service'>Pickup/Delivery Services</label><br />
                        <input type='checkbox' name='service' value='Maintenance' />
                        <label htmlFor='maintenance' className='ms-2' aria-label='service'>Property Maintenance</label>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='m-2'>Estimated date of service:</label>
                    <input type='date' name='date' className='ms-2' aria-label='date' required='required'></input>
                </Col>
                <Col>
                    <label className='m-2'>Additional Information:</label><br/>
                    <textarea name="message" aria-label='message' className='ms-2 w-100 h-100' />
                </Col>
            </Row>
            <Row>
                <input type="submit" value="Send" aria-label='submit button' className='btn btn-lg btn-primary col-sm-2 mt-5'/>
            </Row>
        </form>
    );
};

export default ContactFormTwo;