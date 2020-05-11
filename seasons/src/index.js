// import the react and reactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



class App extends React.Component {
    constructor(props) {
        super(props);                       //passes stuff from React.Component
        this.state = {
            lat: null,           // null is used for numbers
            errorMessage: ''
        };
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((position) => { this.setState({ lat: position.coords.latitude }) }, (err) => this.setState({ errorMessage: err.message }));
    }
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />//<div>Latitude: {this.state.lat}</div>
        }
        else { return <div> <Spinner message="Waiting for location" /> </div>; }
    }



    render() {                                  //gets called ALL THE TIME



        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));