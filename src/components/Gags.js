import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGag } from '../actions/actions';
import '../assets/stylesheets/components/Gags.scss';
import { product } from '../data/gag.js';
import { Button } from 'reactstrap';

class Gags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewAll: false,
            reelContainerWidth: 1200
        };
    }

    updateDimensions() {
        const reelContainerWidth = window.innerWidth;

        this.setState({
            reelContainerWidth: reelContainerWidth
        });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    render() {
        const { viewAll } = this.state;

        let rowCount = 4;

        if (this.state.reelContainerWidth >= 1200) {
            rowCount = 4;
        } else if (this.state.reelContainerWidth >= 992 && this.state.reelContainerWidth <= 1199) {
            rowCount = 3;
        } else if (this.state.reelContainerWidth >= 768 && this.state.reelContainerWidth <= 991) {
            rowCount = 2;
        } else if (this.state.reelContainerWidth >= 576 && this.state.reelContainerWidth <= 767) {
            rowCount = 1;
        }

        const shownProducts = viewAll ? product.products : product.products.slice(0, rowCount);

        const productList = shownProducts.map((product, index) => (
            <div className='card' key={product.id}>
                <img className='card-img-top' src={product.imageSrc} alt='Product' />
                <div className='card-body'>
                    <h3 className='card-title'>{product.title}</h3>
                    <p className='card-text price'>
                        <small className='text-muted'>{product.price}</small>
                    </p>
                    <Button color='link' className='card-more-details'>More Details</Button>
                </div>
            </div>
        ));

        return (
            <div className='gags-container'>
                <h2>Prank Your Friends With These Hilarious Gags!</h2>
                <div className=''>
                    {productList}
                    <div className='clearfix' />
                    <div style={{ margin: '0 auto', width: '186px' }}>
                        <Button
                            color='warning'
                            className='btn-view-more'
                            onClick={() => {
                                this.setState({ viewAll: true });
                            }}>
                            View All
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

Gags.propTypes = {
    // product: PropTypes.array.isRequired,
    // fetchGag: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        // product: state.gag
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGag: fetchGag }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gags);