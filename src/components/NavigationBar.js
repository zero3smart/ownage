import React from 'react';
import '../assets/stylesheets/components/NavigationBar.scss';
import avatar from '../assets/images/character.png';
import headerLogo from '../assets/images/header_logo.png';
import headerLogoDesc from '../assets/images/header_logo_desc.png';
import headerApple from '../assets/images/header_apple.png';
import headerPlay from '../assets/images/header_play.png';

import { IndexLink } from 'react-router';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className=''>
        <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
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
            <ul className='navbar-nav mr-auto'>
              <li>
                <a href='#' className='Bitmap'>
                  <img src={avatar} alt='avatar' />
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
                  Hi, <b>Alexandra</b>
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                  <a className='dropdown-item' href='#'>Action</a>
                  <a className='dropdown-item' href='#'>Another action</a>
                  <a className='dropdown-item' href='#'>Something else here</a>
                </div>
              </li>
            </ul>
            <a href='#' className='navbar-text ml-4'>
              <img src={headerApple} alt='Header Apple' />
            </a>
            <a href='#' className='navbar-text ml-4'>
              <img src={headerPlay} alt='Header Play' />
            </a>
            <div className='vertical-separator ml-4' />
          </div>
        </nav>
        <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
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
          </IndexLink>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <IndexLink to='/explore' activeClassName='active' className='nav-link'>
                  <span className='separator'>Explorer</span> <span className='sr-only'>(current)</span>
                </IndexLink>
              </li>
              <li className='nav-item'>
                <IndexLink to='/about' activeClassName='active' className='nav-link'>
                  <span className='separator'>About</span>
                </IndexLink>
              </li>
              <li className='nav-item'>
                <IndexLink to='/help' activeClassName='active' className='nav-link'>
                  <span className='separator'>How does this work</span>
                </IndexLink>
              </li>
            </ul>
            <ul className='nav navbar-nav'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='http://example.com'
                  id='navbarDropdownMenuLink'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Hi, <b>Alexandra</b>
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                  <a className='dropdown-item' href='#'>Action</a>
                  <a className='dropdown-item' href='#'>Another action</a>
                  <a className='dropdown-item' href='#'>Something else here</a>
                </div>
              </li>
              <li>
                <a href='#' className='Bitmap'>
                  <img src={avatar} alt='avatar' />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
