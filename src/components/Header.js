import React from 'react';
import '../assets/stylesheets/components/Header.scss';
import NavigationBar from './NavigationBar';
import headerBanner from '../assets/images/header_banner.png';

class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <NavigationBar />
                <img src={headerBanner} alt='Header Banner' />
            </div>
        );
    }
}

export default Header;
