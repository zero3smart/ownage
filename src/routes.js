import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
// import ExplorePage from './components/ExplorePage';
// import AboutPage from './components/AboutPage';
// import HelpPage from './components/HelpPage';
// import MarketDetailPage from './components/MarketDetailPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    {/* <Route path="/explore" component={ExplorePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/help" component={HelpPage} />
    <Route path="/market-detail/:slug" component={MarketDetailPage} /> */}
  </Route>
)