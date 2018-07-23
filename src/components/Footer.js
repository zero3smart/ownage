import React from 'react';
import PropTypes from 'prop-types';
import footerLogoDesc from '../assets/images/footer_logo_description.png';
import appStoreBtn from '../assets/images/footer_app_store_btn.png';
import googlePlayBtn from '../assets/images/footer_google_play_btn.png';
import youtube from '../assets/images/youtube.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import camera from '../assets/images/camera.png';
import '../assets/stylesheets/components/Footer.scss';
import { NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribersCount: 4663605
        }
    }

    render() {
        return (
            <div className='footer-container'>
                <div className='top-links'>
                    <div className='logo-link'>
                        <img src={footerLogoDesc} />
                        <img src={appStoreBtn} />
                        <img src={googlePlayBtn} />
                    </div>
                    <div className='navigation'>
                        <Row>
                            <Col>
                                <NavLink href='#'>Prank Calling App</NavLink>
                                <NavLink href='#'>Request A Prank</NavLink>
                                <NavLink href='#'>Store</NavLink>
                            </Col>
                            <Col>
                                <NavLink href='#'>Videos</NavLink>
                                <NavLink href='#'>Blog</NavLink>
                                <NavLink href='#'>Soundboard</NavLink>
                            </Col>
                            <Col>
                                <NavLink href="#">About</NavLink>
                                <NavLink href="#">Contact</NavLink>
                                <NavLink href="#">Hire me</NavLink>
                            </Col>
                        </Row>
                    </div>
                    <div className='social-link'>
                        <Row>
                            <Col>
                                <img src={youtube} />
                                <img src={camera} />
                            </Col>
                            <Col>
                                <img src={facebook} />
                                <img src={twitter} />
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='bottom-links'>
                    <ul>
                        <li>© 2018 <span style={{color: '#ffa500'}}>Ownage Pranks.</span> All rights reserved</li>
                        <li><NavLink href='#'>Privacy</NavLink></li>
                        <li><NavLink href='#'>Block Number</NavLink></li>
                        <li><NavLink href='#'>Terms and Conditions</NavLink></li>
                        <li><NavLink href='#'>Site Map</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
