import React from 'react';
import { Row, Col } from 'reactstrap';
import countyMap from '../images/County Map.webp';
import insertWide from '../images/Insert_wide-1-768x366.webp';
import reclaimSpace from '../images/ReclaimSpace.webp';

const Home = () => {
  return (
    <>
    <div className='home-page'>
      <Row>
        <img src={insertWide} alt="Protecting floors, carpets, and items in truck" className="img-fluid" id="insertwide" />
      </Row>
      <Row>
        <Col className='col-12 col-sm-6'>
          <img src={countyMap} alt="Map of Clark County, NV" id="countymap" className='img-fluid' />
        </Col>
        <Col className='col-12 col-sm-6'>
          <p>Route Runners LLC is a family owned business that serves Las Vegas, Henderson, North Las Vegas, and all of Clark County. We are expanding to handle out of state clients as well. We are avaiable for commercial and residential customers. If you are in need of Moving Services, Junk Removal, or Hauling, we can help. At Route Runners . . . </p>
          <p>"All Routes Lead to You!" </p>
          <div className='col-12'>
          <img src={reclaimSpace} alt="Before and after images of junk removal service" className='img-fluid' id="claimspace" />
          </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Home;