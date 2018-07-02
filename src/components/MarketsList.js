import React from 'react';
import MarketCard from './MarketCard';

export default function MarketsList({ markets }) {
  const emptyMessage = (
    <p>There are no markets yet in your collection</p>
  );

  const marketsList = (
    <div className="ui four cards">
      { markets.map(market => <MarketCard market={market} key={market.id} />) }
    </div>
  );

  return (
    <div>
      { markets.length === 0 ? emptyMessage : marketsList }
    </div>
  );
}

MarketsList.propTypes = {
  markets: React.PropTypes.array.isRequired
}
