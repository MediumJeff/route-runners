import React from 'react';
import { Row, Col } from 'reactstrap';
import insertWide from '../images/Insert_wide-1-768x366.webp';
import dumpster from '../images/dumpster.webp';


const Services = () => {
  return (
    <div className='service-page'>
      <Row>
        <h1 className='p-3 text-white text-center'>Services</h1>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>Moving Services</li>
            <li>Packing Services</li>
            <li>Office Relocations</li>
          </ul>
        </Col>
        <Col>
          <p className='mt-3'>Leave the heavy lifting to us! We use heavy duty moving equipment to safely move your belongings. We will also work to protect your walls, rugs, and furniture. </p>
        </Col>
        <Col>
          <img src={insertWide} alt='Protecting floors, carpets, and items in truck' className='img-fluid' />
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>Junk Removal</li>
            <li>Trash-outs</li>
            <li>Property Clean-out</li>
          </ul>
        </Col>
        <Col>
          <p className='mt-3'>We bring the dumpsters and work to clean your property inside and out. Great turnarounds for a quick rental!</p>
        </Col>
        <Col>
          <img src={dumpster} alt="Empty dumpster" className='img-fluid'/>
        </Col>
      </Row>
      <Row>
        <h3 className='text-white text-center mt-5'>Open Monday through Saturday from 8 AM to 8 PM (Pacific)</h3>
      </Row>
    </div>
  )
}

export default Services;