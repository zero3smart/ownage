import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideo } from '../actions/actions';
import '../assets/stylesheets/components/LatestVideo.scss';
import { video } from '../data/video.js';
import { Button } from 'reactstrap';

class LatestVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowCount: 1
        };
    }

    componentDidMount() {

    }

    render() {
        const { rowCount } = this.state;

        const shownVideos = rowCount * 3 <= video.videos.length ? video.videos.slice(0, rowCount * 3) : video.videos;

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
            <div className='latest-video-container'>
                <h2>Latest Videos</h2>
                <div className=''>
                    {videoList}
                    <div className='clearfix' />
                    <div style={{ margin: '0 auto', width: '186px' }}>
                        <Button
                            color='warning'
                            className='btn-view-more'
                            onClick={() => {
                                if (rowCount <= video.videos.length / 3)
                                    this.setState({ rowCount: rowCount + 1 });
                            }}>
                            View More
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

LatestVideo.propTypes = {
    // video: PropTypes.array.isRequired,
    // fetchVideo: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        // video: state.video
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideo: fetchVideo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestVideo);
