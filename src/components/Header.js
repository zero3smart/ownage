import React from 'react';
import '../assets/stylesheets/components/Header.scss';
import NavigationBar from './NavigationBar';

class Header extends React.Component {
  render() {
    return (
      <div className='header-container'>
        <NavigationBar />
      </div>
    );
  }
}

export default Header;
