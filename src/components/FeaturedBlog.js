import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlog } from '../actions/actions';
import '../assets/stylesheets/components/FeaturedBlog.scss';
import { blog } from '../data/blog.js';
import { Button } from 'reactstrap';

class FeaturedBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowIndex: 1
        };
    }

    componentDidMount() {

    }

    render() {
        const { rowIndex } = this.state;

        const shownBlogs = rowIndex * 2 <= blog.blogs.length ? blog.blogs.slice(0, rowIndex * 2) : blog.blogs;

        const blogList = shownBlogs.map((blog, index) => (
            <div className='card' key={blog.id}>
                <img className='card-img-top' src={blog.imageSrc} alt='Blog' />
                <div className='card-body'>
                    <h3 className='card-title'>{blog.title}</h3>
                    <p className='card-text date'>
                        <i className='fa fa-calendar' aria-hidden='true' />
                        <small className='text-muted'>{blog.date}</small>
                    </p>
                    <p className='card-text description'>{blog.description}</p>
                </div>
            </div>
        ));

        return (
            <div className='featured-blog-container'>
                <h2>Featured Blogs</h2>
                <div className=''>
                    {blogList}
                    <div className='clearfix' />
                    <div style={{ margin: '0 auto', width: '186px' }}>
                        <Button
                            color='warning'
                            className='btn-view-more'
                            onClick={() => {
                                if (rowIndex <= blog.blogs.length / 2)
                                    this.setState({ rowIndex: rowIndex + 1 });
                            }}>
                            View More
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

FeaturedBlog.propTypes = {
    // blog: PropTypes.array.isRequired,
    // fetchBlog: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        // blog: state.blog
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBlog: fetchBlog }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedBlog);
