import React from 'react';
import { Row, Col } from 'reactstrap';
import ContactFormTwo from '../components/ContactFormTwo';

const ContactPage = () => {
  return (
    <>
      <div className='contact-page'>
        <div>
          <h1 className='text-center'>Contact Us</h1>
        </div>
        <div className='col-sm-12 text-center p-5'>
          <Row>
            <Col>
              <i className='fa fa-phone fa-5x'></i>
              <a role='button' className='btn btn-primary ms-2' href='tel:+17028001670'><h3>702.800.1670</h3></a>
            </Col>
            <Col>
              <i className='fa fa-mobile fa-5x'></i>
              <a role='button' className='btn btn-primary ms-2' href='sms:+14146870069'><h3>414.687.0069</h3></a>
            </Col>
          </Row>
        </div>
        <Row>
          <Col className='col-sm-4 p-5'>
            <i className='fa fa-envelope fa-5x float-end'></i>
          </Col>
          <Col className='col-sm-7 p-3 mt-5'>
            <ContactFormTwo />
          </Col>
        </Row>
        <h4 className='text-center text-white'>Open Monday through Saturday from 8 AM to 8 PM (Pacific)</h4>
      </div>
    </>
  )
}

export default ContactPage;