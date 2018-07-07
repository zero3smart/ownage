import React from 'react';
import Header from './Header';
import '../assets/stylesheets/components/App.scss';

class App extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.object.isRequired
};

export default App;
