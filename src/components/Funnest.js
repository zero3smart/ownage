import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFunnest } from '../actions/actions';
import '../assets/stylesheets/components/Funnest.scss';
import { video } from '../data/funnest.js';
import { Button, Clearfix } from 'react-bootstrap';
import Slider from 'react-slick';

class Funnest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "20px",
            slidesToShow: 1,
            speed: 500
        };

        const shownVideos = video.videos.slice(0, 5);

        const videoList = shownVideos.map((video, index) => (
            <div className='card' key={video.id}>
                <img className='card-img-top' src={video.imageSrc} alt='Video' />
                <div className='card-body'>
                    <Button bsClass='btn card-send-prank' href='#'>Send Prank</Button>
                </div>
            </div>
        ));

        return (
            <div className='funnest-container'>
                <div className='prev-next-section'>
                    <Button
                        bsClass='btn btn-primary btn-left-arrow'
                        href='#'
                        onClick={() => {

                        }}>
                    </Button>
                    <Button
                        bsClass='btn btn-primary btn-right-arrow'
                        href='#'
                        onClick={() => {

                        }}>
                    </Button>
                </div>
                <div className='video-list-section'>
                    {videoList}
                </div>
                <Clearfix />
                <div style={{ margin: '0 auto', width: '186px' }}>
                    <Button
                        bsClass='btn btn-link btn-check-out'
                        href='#'
                        onClick={() => {

                        }}>
                        Check out all our pranks!
                    </Button>
                </div>
            </div>
        );
    }
}

Funnest.propTypes = {
    // funnest: React.PropTypes.array.isRequired,
    // fetchFunnest: React.PropTypes.func.isRequired
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