import React from 'react';
import '../assets/stylesheets/components/NavigationBar.scss';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

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
                            <NavItem enventKey={3} href="#" className='header-anchor'>
                                Log In
                            </NavItem>
                            <NavItem enventKey={4} href="#" className='header-anchor'>
                                Sign Up
                            </NavItem>
                            <NavDropdown eventKey={3} title={title} id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <nav className='navbar navbar-expand-md navbar-light bg-light header-nav'>
                    <button
                        className='navbar-toggler navbar-toggler-right'
                        type='button'
                        data-toggle='collapse'
                        data-target='#nav1'
                        aria-controls='nav1'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>

                    <IndexLink to='/' activeClassName='active' className='navbar-brand'>
                        <h1>
                            <img src={headerLogo} alt='Header Logo' />
                            <img src={headerLogoDesc} alt='Header Logo Desc' />
                        </h1>
                    </IndexLink>

                    <div className='collapse navbar-collapse' id='nav1'>
                        <ul className='navbar-nav mr-auto' />
                        <a href='#' className='navbar-text ml-4'>
                            <img src={headerApple} alt='Header Apple' />
                        </a>
                        <a href='#' className='navbar-text ml-4'>
                            <img src={headerPlay} alt='Header Play' />
                        </a>
                        <div className='vertical-separator ml-4' />
                        <a href='#' className='navbar-text ml-4 header-anchor'>
                            Log In
                        </a>
                        <div className='vertical-separator ml-4' />
                        <a href='#' className='navbar-text ml-4 header-anchor'>
                            Sign Up
                        </a>
                        <ul className='nav navbar-nav header-cart ml-4'>
                            <li>
                                <a href='#' className='Bitmap'>
                                    <img src={headerCart} alt='Header Cart' width='15' />
                                </a>
                            </li>
                            <li className='nav-item dropdown'>
                                <a
                                    className='nav-link dropdown-toggle'
                                    href='http://example.com'
                                    id='navbarDropdownMenuLink'
                                    data-toggle='dropdown'
                                    aria-haspopup='true'
                                    aria-expanded='false'>
                                    Cart
                                </a>
                                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                    <a className='dropdown-item' href='#'>Action</a>
                                    <a className='dropdown-item' href='#'>Another action</a>
                                    <a className='dropdown-item' href='#'>Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className='navbar navbar-expand-md navbar-light bg-light nav-links'>
                    <button
                        className='navbar-toggler navbar-toggler-right'
                        type='button'
                        data-toggle='collapse'
                        data-target='#nav2'
                        aria-controls='nav2'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>

                    <div className='collapse navbar-collapse' id='nav2'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <IndexLink to='/prank-all-videos' activeClassName='active' className='nav-link'>
                                    <span className='separator'>PRANK CALL VIDEOS</span>
                                </IndexLink>
                            </li>
                            <li className='nav-item'>
                                <IndexLink to='/request-prank' activeClassName='active' className='nav-link'>
                                    <span className='separator'>REQUEST A PRANK</span>
                                </IndexLink>
                            </li>
                            <li className='nav-item'>
                                <IndexLink to='/store' activeClassName='active' className='nav-link'>
                                    <span className='separator'>STORE</span>
                                </IndexLink>
                            </li>
                            <li className='nav-item'>
                                <IndexLink to='/apps' activeClassName='active' className='nav-link'>
                                    <span className='separator'>APPS</span>
                                </IndexLink>
                            </li>
                            <li className='nav-item'>
                                <IndexLink to='/blog' activeClassName='active' className='nav-link'>
                                    <span className='separator'>BLOG</span>
                                </IndexLink>
                            </li>
                        </ul>
                        <div className='has-search'>
                            <span className='fa fa-search form-control-feedback'></span>
                            <input type='text' className='form-control' placeholder='Search' />
                        </div>
                    </div>
                </nav> */}
            </div>
        );
    }
}

export default NavigationBar;
