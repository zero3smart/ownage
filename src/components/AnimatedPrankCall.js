import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideo } from '../actions/actions';
import '../assets/stylesheets/components/AnimatedPrankCall.scss';
import { video } from '../data/animated-prank-calls';

class AnimatedPrankCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        const shownVideos = video.videos.slice(0, 3);

        const videoList = shownVideos.map((video, index) => (
            <div className='card' key={video.id}>
                <img className='card-img-top' src={video.imageSrc} alt='Video' />
                <div className='card-body'>
                    <h3 className='card-title'>{video.title}</h3>
                    <p className='card-text date'>
                        <i className='fa fa-calendar' aria-hidden='true' />
                        <small className='text-muted'>{video.date}</small>
                    </p>
                    <p className='card-text views'>
                        <i className='fa fa-eye' aria-hidden='true' />
                        &nbsp;{video.views}&nbsp;views
                    </p>
                    <p className='card-text description'>{video.description}</p>
                </div>
            </div>
        ));

        return (
            <div className='animated-prank-call-container'>
                <h2>Animated Prank Calls</h2>
                <div style={{display: 'inline-block'}}>
                    {videoList}
                </div>
            </div>
        );
    }
}

AnimatedPrankCall.propTypes = {
    // video: PropTypes.array.isRequired,
    // fetchVideo: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        // video: state.video
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideo: fetchVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedPrankCall);