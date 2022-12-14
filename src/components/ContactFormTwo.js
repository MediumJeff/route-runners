import React, { useRef } from 'react';
import { Row, Col } from 'reactstrap';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

const ContactFormTwo = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <Row>
                <Col>
                    <label className='m-2'>Name</label>
                    <input type="text" name="user_name" />
                </Col>
                <Col>
                    <label className='m-2'>Email</label>
                    <input type="email" name="user_email" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='m-2'>I am a:</label>
                    <select name='customer_type'>
                        <option value=''>Select one</option>
                        <option name='customer_type' value='homeowner'>Homeowner</option>
                        <option name='customer_type' value='renter'>Renter</option>
                        <option name='customer_type' value='realtor'>Realtor</option>
                        <option name='customer_type' value='propertymanager'>Property Manager</option>
                        <option name='customer_type' value='hoamember'>HOA Manager/Member</option>
                        <option name='customer_type' value='officemanager'>Office Manager</option>
                        <option name='customer_type' value='other'>Other</option>
                    </select>
                </Col>
                <Col>
                    <label className='m-2'>I am interested in (check all that apply):</label><br />
                    <div className='ms-3'>
                        <input type='checkbox' name='moving' value='moving services' />
                        <label for='moving' className='ms-2'>Moving Services</label><br />
                        <input type='checkbox' name='packing' value='packing services' />
                        <label for='packing' className='ms-2'>Packing Services</label><br />
                        <input type='checkbox' name='trash' value='trash'></input>
                        <label for='trash' className='ms-2'>Trash/Junk Removal</label><br />
                        <input type='checkbox' name='pickup' value='pickup/delivery' />
                        <label for='pickup/delivery' className='ms-2'>Pickup/Delivery Services</label><br />
                        <input type='checkbox' name='maintenance' value='maintenance' />
                        <label for='maintenance' className='ms-2'>Property Maintenance</label>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className='m-2'>Estimated date of service:</label>
                    <input type='date'></input>
                </Col>
                <Col>
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </Col>
            </Row>
        </form>
    );
};

export default ContactFormTwo;