import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFunnest } from '../actions/actions';
import '../assets/stylesheets/components/Funnest.scss';
import { video } from '../data/funnest.js';
import { Button } from 'reactstrap';

// import '../assets/library/jquery.carousel-1.1.min.js';
// import '../assets/library/jquery.mousewheel.min.js';

class Funnest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.carousel = React.createRef();
    }

    componentDidMount() {
        // $(this.carousel.current).carousel({
        //     carouselWidth: 930,
        //     carouselHeight: 330,
        //     directionNav: true,
        //     shadow: true,
        //     buttonNav: 'bullets'
        // });
    }

    render() {
        // const shownVideos = video.videos.slice(0, 5);

        // const videoList = shownVideos.map((video, index) => (
        //     <div className='card' key={video.id}>
        //         <img className='card-img-top' src={video.imageSrc} alt='Video' />
        //         <div className='card-body'>
        //             <Button color='warning' className='card-send-prank'>Send Prank</Button>
        //         </div>
        //     </div>
        // ));

        return (
            <div className='funnest-container'>
                <h2>We Bring To You The Funniest Prank Call Scripts In The Planet!</h2>
                <p>You ordered a pizza?</p>
                <div className='carousel' ref={this.carousel}>
                    <div
                        className='slides'>
                        <div
                            className='slideItem'
                            style={{width: '382px', height: '231px', padding: '10px', top: '54px', right: '34.6px', 'opacity': 0.5, zIndex: 4, display: 'block'}}>
                            <a href='#'>
                                <img src='images/planet1.png' style={{width: '362px', height: '211px', display: 'inline-block'}} />
                            </a>
                            <div
                                className='shadow'
                                style={{width: '400px', zIndex: -1, position: 'absolute', margin: '0px', padding: '0px', border: 'none', overflow: 'hidden', left: '0px', bottom: '0px'}}>
                                <div
                                    className='shadowLeft'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                                <div
                                    className='shadowMiddle'
                                    style={{position: 'relative', float: 'left', width: '56px'}}>
                                </div>
                                <div
                                    className='shadowRight'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                            </div>
                        </div>

                        <div
                            className='slideItem'
                            style={{width: '204.8px', height: '168.96px', top: '73.2px', right: '-47.32px', opacity: 0, zIndex: 3, display: 'none'}}>
                            <a href='#'>
                                <img src='images/slide-2.jpg' style={{width: '204.8px', height: '153.6px', display: 'inline-block'}} />
                            </a>
                            <div
                                className='shadow'
                                style={{width: '400px', zIndex: -1, position: 'absolute', margin: '0px', padding: '0px', border: 'none', overflow: 'hidden', left: '0px', bottom: '0px'}}>
                                <div
                                    className='shadowLeft'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                                <div
                                    className='shadowMiddle'
                                    style={{position: 'relative', float: 'left', width: '4.80000000000001px'}}>
                                </div>
                                <div
                                    className='shadowRight'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                            </div>
                        </div>

                        <div
                            className='slideItem'
                            style={{width: '204.8px', height: '168.96px', top: '73.2px', right: '772.52px', opacity: 0, zIndex: 3, display: 'none'}}>
                            <a href='#'>
                                <img src='images/slide-3.jpg' style={{width: '204.8px', height: '153.6px', display: 'inline-block'}} />
                            </a>
                            <div
                                className='shadow'
                                style={{width: '400px', zIndex: -1, position: 'absolute', margin: '0px', padding: '0px', border: 'none', overflow: 'hidden', left: '0px', bottom: '0px'}}>
                                <div
                                    className='shadowLeft'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                                <div
                                    className='shadowMiddle'
                                    style={{position: 'relative', float: 'left', width: '4.80000000000001px'}}>
                                </div>
                                <div
                                    className='shadowRight'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                            </div>
                        </div>

                        <div
                            className='slideItem'
                            style={{width: '382px', height: '231px', top: '54px', padding: '10px', right: '786.4px', opacity: 0.5, zIndex: 4, display: 'block'}}>
                            <a href='#'>
                                <img src='images/planet1.png' style={{width: '362px', height: '211px', display: 'inline-block'}} />
                            </a>
                            <div
                                className='shadow'
                                style={{width: '400px', zIndex: -1, position: 'absolute', margin: '0px', padding: '0px', border: 'none', overflow: 'hidden', left: '0px', bottom: '0px'}}>
                                <div
                                    className='shadowLeft'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                                <div
                                    className='shadowMiddle'
                                    style={{position: 'relative', float: 'left', width: '56px'}}>
                                </div>
                                <div
                                    className='shadowRight'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                            </div>
                        </div>

                        <div
                            className='slideItem'
                            style={{width: '387px', height: '298px', top: '30px', right: '685px', padding: '10px', opacity: 0.7, zIndex: 5, display: 'block'}}>
                            <img src='images/planet1.png' style={{width: '367px', height: '263px', display: 'inline-block'}} />
                            <div
                                className='shadow'
                                style={{width: '400px', zIndex: -1, position: 'absolute', margin: '0px', padding: '0px', border: 'none', overflow: 'hidden', left: '0px', bottom: '0px'}}>
                                <div
                                    className='shadowLeft'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                                <div
                                    className='shadowMiddle'
                                    style={{position: 'relative', float: 'left', width: '120px'}}>
                                </div>
                                <div
                                    className='shadowRight'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                            </div>
                        </div>

                        <div
                            className='slideItem'
                            style={{width: '502px', height: '440px', padding: '10px', top: '0px', right: '360px', opacity: 1, zIndex: 6, display: 'block'}}>
                            <a href='#'>
                                <img src='images/planet1.png' style={{width: '482px', height: '339px', display: 'inline-block'}} />
                            </a>
                            <div style={{marginTop: '10px'}}>
                                <Button className='card-send-prank'>Send Prank</Button>
                            </div>
                            <div
                                className='shadow'
                                style={{width: '400px', zIndex: -1, position: 'absolute', margin: '0px', padding: '0px', border: 'none', overflow: 'hidden', left: '0px', bottom: '0px'}}>
                                <div
                                    className='shadowLeft'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                                <div
                                    className='shadowMiddle'
                                    style={{position: 'relative', float: 'left', width: '200px'}}>
                                </div>
                                <div
                                    className='shadowRight'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                            </div>
                        </div>

                        <div
                            className='slideItem'
                            style={{width: '387px', height: '298px', padding: '10px', top: '30px', right: '147px', opacity: 0.7, zIndex: 5, display: 'block'}}>
                            <img src='images/planet1.png' style={{width: '367px', height: '278px', display: 'inline-block'}} />
                            <div
                                className='shadow'
                                style={{width: '400px', zIndex: -1, position: 'absolute', margin: '0px', padding: '0px', border: 'none', overflow: 'hidden', left: '0px', bottom: '0px'}}>
                                <div
                                    className='shadowLeft'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                                <div
                                    className='shadowMiddle'
                                    style={{position: 'relative', float: 'left', width: '120px'}}>
                                </div>
                                <div
                                    className='shadowRight'
                                    style={{position: 'relative', float: 'left'}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='clearfix' />
                <div>
                    <Button color='link' className='btn-check-out'>Check out all our pranks!</Button>
                </div>
            </div>
        );
    }
}

Funnest.propTypes = {
    // funnest: PropTypes.array.isRequired,
    // fetchFunnest: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        // funnest: state.funnest
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchFunnest: fetchFunnest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Funnest);