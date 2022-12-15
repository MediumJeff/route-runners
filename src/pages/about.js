import React from 'react';
import { Row, Col } from 'reactstrap';
import truckDrawing from '../images/TruckDrawing.webp';

const About = () => {
  return (
    <div className='about-page'>
      <Row>
        <h1 className='text-center p-3'>About Us</h1>
      </Row>
      <Row>
        <Col className='col-sm-7 ms-5'>
          <h3>Route Runners LLC is a licensed and insured moving, hauling, and junk removal company. We offer residential and commercial services including packing, loading and unloading, pickup and delivery, bulk removal, and full commercial clean-outs. We cover all of Clark County, Nevada and are able to handle requests in Southern California and other out of state areas. We offer the most affordable solution for your moving and property enhancement needs.</h3><br/>
          <h2>At Route Runners . . . All Routes Lead to You!</h2>
        </Col>
        <Col>
          <img src={truckDrawing} alt='Drawing of truck in motion' className='col-sm-7'></img>
        </Col>
      </Row>
    </div>
  )
}

export default About;