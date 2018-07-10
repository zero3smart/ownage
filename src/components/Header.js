import React from 'react';
import NavigationBar from './NavigationBar';
import headerBanner1 from '../assets/images/header_banner.png';
import '../assets/stylesheets/components/Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <NavigationBar />
                <div id='banner1'>
                    <img src={headerBanner1} alt='Header Banner1' />
                </div>
            </div>
        );
    }
}

export default Header;
