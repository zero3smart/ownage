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
            viewAll: false
        };
    }

    componentDidMount() {

    }

    render() {
        const style = {
            marginRight: 0
        };

        const { viewAll } = this.state;

        const shownProducts = viewAll ? product.products : product.products.slice(0, 4);

        const productList = shownProducts.map((product, index) => (
            <div className='card' key={product.id} style={(index + 1) % 4 == 0 ? style : {}}>
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