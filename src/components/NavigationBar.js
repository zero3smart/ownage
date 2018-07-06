import React from 'react';
import '../assets/stylesheets/components/NavigationBar.scss';
import headerLogo from '../assets/images/header_logo.png';
import headerLogoDesc from '../assets/images/header_logo_desc.png';
import headerApple from '../assets/images/header_apple.png';
import headerPlay from '../assets/images/header_play.png';
import headerCart from '../assets/images/header_cart.png';

import { IndexLink } from 'react-router';

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-toggleable-md navbar-light bg-faded header-nav'>
                    <button
                        className='navbar-toggler navbar-toggler-right'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>

                    <IndexLink to='/' activeClassName='active' className='navbar-brand'>
                        <img src={headerLogo} alt='Header Logo' />
                        <img src={headerLogoDesc} alt='Header Logo Desc' />
                    </IndexLink>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
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
                <nav className='navbar navbar-toggleable-md navbar-light bg-faded nav-links'>
                    <button
                        className='navbar-toggler navbar-toggler-right'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
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
                </nav>
            </div>
        );
    }
}

export default NavigationBar;
