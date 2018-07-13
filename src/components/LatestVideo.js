import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/videoActions';
import '../assets/stylesheets/components/LatestVideo.scss';
import { videos } from '../data/video.js';

class LatestVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const style = {
            marginRight: 0
        };

        const videoList = videos.videos.map((video, index) => (
            <div className='card' key={video.id} style={(index+1) % 3 == 0 ? style : {}}>
                <img className='card-img-top' src={video.imageSrc} alt='Video' />
                <div className='card-body'>
                    <h3 className='card-title'>{video.title}</h3>
                    <p className='card-text date'>
                        <i className="fa fa-calendar" aria-hidden="true" />
                        <small className='text-muted'>{video.date}</small>
                    </p>
                    <p className='card-text views'>
                        &nbsp;{video.views}&nbsp;views
                    </p>
                    <p className='card-text description'>{video.description}</p>
                </div>
            </div>
        ));

        return (
            <div className='latest-video-container'>
                <div className=''>
                    {videoList}
                </div>

            </div>
        );
    }
}

LatestVideo.propTypes = {
    // videos: React.PropTypes.array.isRequired,
    // fetchVideos: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        // videos: state.videos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideos: fetchVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestVideo);