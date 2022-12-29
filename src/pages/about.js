import React from 'react';
import { Row } from 'reactstrap';
import deliveryVan from '../images/deliveryVan2.webp';

const About = () => {
  return (
    <div className='about-page'>
      <Row>
        <h1 className='text-center p-3'>About Us</h1>
      </Row>
        <div className='text-center ms-5'>
          <h3>Route Runners LLC is a licensed and insured moving, hauling, and junk removal company. We offer residential and commercial services including packing, loading and unloading, pickup and delivery, bulk removal, and full commercial clean-outs. We cover all of Clark County, Nevada and are able to handle requests in Southern California and other out of state areas. We offer the most affordable solution for your moving and property enhancement needs.</h3><br/>
          <h2>At Route Runners . . . All Routes Lead to You!</h2>
          <img src={deliveryVan} alt='Truck in motion' className='col-sm-6'></img>
        </div>
    </div>
  )
}

export default About;