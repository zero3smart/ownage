import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import '../assets/stylesheets/components/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';

class App extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default App;
