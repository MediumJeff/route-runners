import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='site-footer mt-0'>
      <Container>
        <Row>
          <Col xs={{ size: 4 }} sm='4' className='text-center col-6'>
            <h5>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </Col>
          <Col cs='6' sm='4' xs={{ size: 4 }} className='text-center'>
            <h5>Social</h5>
            <a
              className='btn btn-social-icon btn-instagram'
              href='http://instagram.com/routerunnersLLC'
            >
              <i className='fa fa-instagram fa-3x' />
            </a>{' '}
            <a
              className='btn btn-social-icon btn-facebook'
              href='http://www.facebook.com/profile.php?id=100086441546714'
            >
              <i className='fa fa-facebook fa-3x' />
            </a>{' '}
          </Col>
          <Col sm='4' xs={{ size: 12 }} className='text-center'>
            <a
              role='button'
              className='btn btn-link'
              href='tel:+17028001670'
            >
              <i className='fa fa-phone fa-2x' /> 1-702-800-1670
            </a>
            <br />
            <a
              role='button'
              className='btn btn-link'
              href='sms:+14146870069'
            >
              <i className='fa fa-mobile fa-2x' />1-414-687-0069
            </a>
            <br />
            <a
              role='button'
              className='btn btn-link'
              href='mailto:RouteRunners88@gmail.com'
            >
              <i className='fa fa-envelope-o fa-2x' /> RouteRunners88@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;