import React from 'react';
import MarketsList from './MarketsList';
import { connect } from 'react-redux';
import { fetchMarkets } from '../actions/actions';

import '../assets/stylesheets/components/ExplorePage.scss';

class ExplorePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchMarkets().then(res => {
            this.setState({loading: false});
        }, err => {

        });
    }

    render() {
        const loading = (
            <div style={{height: '544px'}}>
              <div className='ui active centered loader'></div>
            </div>
        );

        const marketsList = (
            <div>
              <h1>Markets List</h1>
              <MarketsList markets={this.props.markets} />
            </div>
        );

        return (
            <div>
                { this.state.loading ? loading : marketsList }
            </div>
        );
    }
}

ExplorePage.propTypes = {
    markets: React.PropTypes.array.isRequired,
    fetchMarkets: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        markets: state.markets
    }
}

export default connect(mapStateToProps, { fetchMarkets })(ExplorePage);
