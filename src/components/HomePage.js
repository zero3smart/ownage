import React from 'react';
import PropTypes from 'prop-types';
import LatestVideo from './LatestVideo';
import BestVideo from './BestVideo';
import FeaturedBlog from './FeaturedBlog';
import ProductShop from './ProductShop';
import Funnest from './Funnest';
import AnimatedPrankCall from './AnimatedPrankCall';
import Gags from './Gags';
import Footer from './Footer';
import '../assets/stylesheets/components/HomePage.scss';
import headerBanner2 from '../assets/images/header_banner2.png';
import appStoreBtn from '../assets/images/app_store_btn.png';
import googlePlayBtn from '../assets/images/google_play_btn.png';
import mashable from '../assets/images/mashable.png';
import forbes from '../assets/images/forbes.png';
import huffpost from '../assets/images/huffpost.png';
import yahoo from '../assets/images/yahoo.png';
import gizmodo from '../assets/images/gizmodo.png';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribersCount: 4663605
        }
    }

    render() {
        const emailPlaceholder = (
            <div>
                <i className="fa fa-envelope" aria-hidden="true">Email</i>
            </div>
        );

        let sCount = this.state.subscribersCount.toString();
        let numBlock = [];
        for (let i = 0; i < sCount.length; i++) {
            numBlock.push(
                <React.Fragment>
                    <div className='each-char'>
                        {sCount.charAt(i)}
                    </div>
                    {(sCount.length - i) % 3 === 1 && (i + 1) !== sCount.length ? <div className='comma'>,</div> : <div></div>}
                </React.Fragment>
            );
        }

        return (
            <div className='home-container'>
                <div id='banner2'>
                    <img id='header-banner2' src={headerBanner2} alt='Header Banner2' />
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
                            color='warning'
                            className='btn-submit-request'
                        >
                            Submit Your Request
                        </Button>
                    </div>
                </div>
                <FeaturedBlog />
                <BestVideo />
                <ProductShop />
                <AnimatedPrankCall />
                <Funnest />
                <Gags />
                <div className='brand-section'>
                    <p>As Featured In...</p>
                    <div style={{display: 'flex', paddingBottom: '117px', paddingTop: '17px'}}>
                        <img src={mashable} />
                        <img src={forbes} />
                        <img src={huffpost} />
                        <img src={yahoo} />
                        <img src={gizmodo} />
                    </div>
                </div>
                <div className='subscribe-section'>
                    <div className='subscribe-section__body'>
                        <h2>Subscribe To Ownage Pranks</h2>
                        <p>Don't miss out on the laughs, Exclusive updates, Discounts, Early video releases, and more!</p>
                        <FormGroup>
                            <Input type='email' className='email' name='email' id='exampleEmail' placeholder='Email' />
                            <Button color='warning' className='btn-join'>Join The Fun</Button>
                        </FormGroup>
                        <div className='clearfix' />
                        <div className='num-block'>
                            {numBlock}
                            <div className='description'>
                                <p>Youtube subscribers and counting...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
