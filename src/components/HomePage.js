import React from 'react';
import LatestVideo from './LatestVideo';
import '../assets/stylesheets/components/HomePage.scss';
import headerBanner1 from '../assets/images/header_banner.png';
import headerBanner2 from '../assets/images/header_banner2.png';
import appStoreBtn from '../assets/images/app_store_btn.png';
import googlePlayBtn from '../assets/images/google_play_btn.png';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home-container'>
                <div id='banner1'>
                    <img src={headerBanner1} alt='Header Banner1' />
                </div>
                <div id='banner2'>
                    <img src={headerBanner2} alt='Header Banner2' />
                    <a href='#' id='apple-store-btn'>
                        <img src={appStoreBtn} alt='App Store Button' />
                    </a>
                    <a href='#' id='google-play-btn'>
                        <img src={googlePlayBtn} alt='Google Play Button' />
                    </a>
                </div>
                <div id='latest-video'>
                    <h1>Latest Videos</h1>
                    <LatestVideo />
                </div>
            </div>
        );
    }
}

export default HomePage;
