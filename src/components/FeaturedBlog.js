import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlog } from '../actions/actions';
import '../assets/stylesheets/components/FeaturedBlog.scss';
import { blog } from '../data/blog.js';
import { Button, Clearfix } from 'react-bootstrap';

class FeaturedBlog extends React.Component {
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

        const shownBlogs = rowCount * 2 <= blog.blogs.length ? blog.blogs.slice(0, rowCount * 2) : blog.blogs;

        const blogList = shownBlogs.map((blog, index) => (
            <div className='card' key={blog.id} style={(index + 1) % 2 == 0 ? style : {}}>
                <img className='card-img-top' src={blog.imageSrc} alt='Blog' />
                <div className='card-body'>
                    <h3 className='card-title'>{blog.title}</h3>
                    <p className='card-text date'>
                        <i className="fa fa-calendar" aria-hidden="true" />
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
                    <Clearfix />
                    <div style={{ margin: '0 auto', width: '186px' }}>
                        <Button
                            bsClass='btn btn-view-more'
                            href='#'
                            onClick={() => {
                                if (rowCount <= blog.blogs.length / 2)
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

FeaturedBlog.propTypes = {
    // blog: React.PropTypes.array.isRequired,
    // fetchBlog: React.PropTypes.func.isRequired
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