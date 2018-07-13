import React from 'react';
import '../assets/stylesheets/components/NavigationBar.scss';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';

import headerLogo from '../assets/images/header_logo.png';
import headerLogoDesc from '../assets/images/header_logo_desc.png';
import headerApple from '../assets/images/header_apple.png';
import headerPlay from '../assets/images/header_play.png';
import headerCart from '../assets/images/header_cart.png';

import { IndexLink } from 'react-router';

class NavigationBar extends React.Component {
    render() {
        const title = <div className='title'><img src={headerCart} alt='Header Cart' width='15' />Cart</div>;

        return (
            <div>
                <Navbar collapseOnSelect fluid id='nav1'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <IndexLink to='/'>
                                <h1>
                                    <img src={headerLogo} alt='Header Logo' />
                                    <img src={headerLogoDesc} alt='Header Logo Desc' />
                                </h1>
                            </IndexLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <img src={headerApple} alt='Header Apple' />
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <img src={headerPlay} alt='Header Play' />
                            </NavItem>
                            <NavItem eventKey={3} href="#" className='header-anchor'>
                                Log In
                            </NavItem>
                            <NavItem eventKey={4} href="#" className='header-anchor'>
                                Sign Up
                            </NavItem>
                            <NavItem />
                            <NavDropdown eventKey={5} title={title} id="basic-nav-dropdown">
                                <MenuItem eventKey={5.1}>Action</MenuItem>
                                <MenuItem eventKey={5.2}>Another action</MenuItem>
                                <MenuItem eventKey={5.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={5.4}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar fluid id='nav2'>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullLeft>
                            <NavItem eventKey={1} href='/prank-all-videos'>
                                <span className='separator'>PRANK CALL VIDEOS</span>
                            </NavItem>
                            <NavItem eventKey={2} href='/request-prank'>
                                <span className='separator'>REQUEST A PRANK</span>
                            </NavItem>
                            <NavItem eventKey={3} href='/store'>
                                <span className='separator'>STORE</span>
                            </NavItem>
                            <NavItem eventKey={4} href='/apps'>
                                <span className='separator'>APPS</span>
                            </NavItem>
                            <NavItem eventKey={5} href='/blog'>
                                <span className='separator'>BLOG</span>
                            </NavItem>
                        </Nav>
                        <Navbar.Form pullRight>
                            <FormGroup className='has-search'>
                                <FormControl type="text" placeholder="Search" />
                                <span className='fa fa-search form-control-feedback' />
                            </FormGroup>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
