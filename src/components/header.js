import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Logo from '../images/RRLogo.png';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/' >
                <img src={Logo} alt='RR logo' className='logo float-start'></img>
                <h1 className='col-12'>Route Runners</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className='col-12' />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link text-center' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link text-center' to='/services'>
                            <i className='fa fa-truck fa-lg' /> Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link text-center' to='/about'>
                            <i className='fa fa-list fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link text-center' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'></NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;