import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProduct } from '../actions/actions';
import '../assets/stylesheets/components/ProductShop.scss';
import { product } from '../data/product.js';
import { Button, Clearfix } from 'react-bootstrap';

class ProductShop extends React.Component {
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
                    <Button bsClass='btn btn-link card-more-details' href='#'>More Details</Button>
                </div>
            </div>
        ));

        return (
            <div className='product-shop-container'>
                <h2>Shope With Us</h2>
                <div className=''>
                    {productList}
                    <Clearfix />
                    <div style={{ margin: '0 auto', width: '186px' }}>
                        <Button
                            bsClass='btn btn-view-more'
                            href='#'
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

ProductShop.propTypes = {
    // product: React.PropTypes.array.isRequired,
    // fetchProduct: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        // product: state.product
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProduct: fetchProduct }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShop);