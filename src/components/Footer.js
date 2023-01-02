import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='site-footer mt-0'>
      <Container>
        <Row>
          <Col xs={{ size: 4 }} sm='4' className='text-center col-6'>
            <h4>Links</h4>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' aria-label='Link to home page'>Home</Link>
              </li>
              <li>
                <Link to='/services' aria-label='Link to services page'>Services</Link>
              </li>
              <li>
                <Link to='/about' aria-label='Link to about us page'>About</Link>
              </li>
              <li>
                <Link to='/contact' aria-label='Link to contact page'>Contact</Link>
              </li>
            </ul>
          </Col>
          <Col cs='6' sm='4' xs={{ size: 4 }} className='text-center'>
            <h4>Social</h4>
            <a
              className='btn btn-social-icon btn-instagram'
              href='http://instagram.com/routerunnersLLC'
              aria-label='Link to Instagram account'
            >
              <i className='fa fa-instagram fa-3x' />
            </a>{' '}
            <a
              className='btn btn-social-icon btn-facebook'
              href='http://www.facebook.com/profile.php?id=100086441546714'
              aria-label='Link to Facebook page'
            >
              <i className='fa fa-facebook fa-3x' />
            </a>{' '}
          </Col>
          <Col sm='4' xs={{ size: 12 }} className='text-center'>
            <a
              role='button'
              className='btn btn-link'
              href='tel:+17028001670'
              aria-label='Call by phone'
            >
              <i className='fa fa-phone fa-2x' /> 702-800-1670
            </a>
            <br />
            <a
              role='button'
              className='btn btn-link'
              href='sms:+14146870069'
              aria-label='Contact via text message'
            >
              <i className='fa fa-mobile fa-2x' />414-687-0069
            </a>
            <br />
            <a
              role='button'
              className='btn btn-link'
              href='mailto:RouteRunners88@gmail.com'
              aria-label='Contact via email'
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