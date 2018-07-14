import React from 'react';
import LatestVideo from './LatestVideo';
import BestVideo from './BestVideo';
import FeaturedBlog from './FeaturedBlog';
import '../assets/stylesheets/components/HomePage.scss';
import headerBanner2 from '../assets/images/header_banner2.png';
import appStoreBtn from '../assets/images/app_store_btn.png';
import googlePlayBtn from '../assets/images/google_play_btn.png';
import { Button } from 'react-bootstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home-container'>
                <div id='banner2'>
                    <img src={headerBanner2} alt='Header Banner2' />
                    <a href='#' id='apple-store-btn'>
                        <img src={appStoreBtn} alt='App Store Button' />
                    </a>
                    <a href='#' id='google-play-btn'>
                        <img src={googlePlayBtn} alt='Google Play Button' />
                    </a>
                </div>
                <LatestVideo />
                <div className='request-a-prank-call'>
                    <h2>Request A Prank Call</h2>
                    <p>Have you been wanting to prank someone but need some professional help? Looking for that sweet revenge
                    someone who pranked you? We can help - but we’ll need you to give us some background info
                    so we can make this prank call AMAZING. Click below to start!</p>
                    <div style={{ margin: '0 auto', marginTop: '25px', width: '318px' }}>
                        <Button
                            bsClass='btn btn-submit-request'
                            href='#'
                            onClick={() => {

                            }}>
                            Submit Your Request
                        </Button>
                    </div>
                </div>
                <FeaturedBlog />
                <BestVideo />
            </div>
        );
    }
}

export default HomePage;
