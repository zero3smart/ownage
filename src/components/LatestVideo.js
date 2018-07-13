import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions/videoActions';
import '../assets/stylesheets/components/LatestVideo.scss';
import { videos } from '../data/video.js';
import { Button, Clearfix } from 'react-bootstrap';

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
        const style = {
            marginRight: 0
        };

        const { rowCount } = this.state;

        const shownVideos = rowCount * 3 <= videos.videos.length ? videos.videos.slice(0, rowCount * 3) : videos.videos;

        const videoList = shownVideos.map((video, index) => (
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
                    <Clearfix />
                    <div style={{ margin: '0 auto', width: '186px' }}>
                        <Button
                            bsClass='btn btn-view-more'
                            href='#'
                            onClick={() => {
                                if (rowCount <= videos.videos.length / 3)
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