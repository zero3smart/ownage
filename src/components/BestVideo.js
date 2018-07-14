import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideo } from '../actions/actions';
import '../assets/stylesheets/components/BestVideo.scss';
import { video } from '../data/video.js';
import { Button, Clearfix } from 'react-bootstrap';

class BestVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const style = {
            marginRight: 0
        };

        const shownVideos = video.videos.slice(0, 6);

        const videoList = shownVideos.map((video, index) => (
            <div className='card' key={video.id} style={(index + 1) % 3 == 0 ? style : {}}>
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
            <div className='best-video-container'>
                <h2>Our Best Videos</h2>
                <div className=''>
                    {videoList}
                </div>
            </div>
        );
    }
}

BestVideo.propTypes = {
    // videos: React.PropTypes.array.isRequired,
    // fetchVideo: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        // video: state.video
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideo: fetchVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BestVideo);