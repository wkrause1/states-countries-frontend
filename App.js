import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Country from './Country';
import State from './State';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      states: [],
    };
    //this.handleChange = this.handleChange.bind(this);
    this.handleCountryPost = this.handleCountryPost.bind(this);
    this.handleStatePost = this.handleStatePost.bind(this);
  }

  componentDidMount() {
    let countryArray = [];
    fetch('http://localhost:8000/countries/').then(response => {
      return response.json();
    }).then(data => {
      countryArray = data.map((country) => {
        return country
      });
      this.setState({
        countries: countryArray,
      });
    });
  }

  handleChange = (code) => {
    try {
        let stateArray = [];
        fetch('http://localhost:8000/countries/' + code + '/states/').then(response => {
            return response.json();
        }).then(data => {
            stateArray = data.map((state) => {
                return state
            });
            this.setState({
                states: stateArray,
            })
        });
        console.log(this.states);
    }
    catch (e) {
        console.log(e.message);
    }
  };;

    handleCountryPost(country){
      let code = country.charAt(0)+country.charAt(country.length-1);
      console.log('Entering handleCountryPost method');
      console.log(country);
      fetch('http://localhost:8000/countries/', {
        method: 'POST',
          headers: {
          'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            country_text: country,
            country_code: code,
          })
      })
    }

    handleStatePost(countryCode, stateText) {
        console.log(stateText);
        let code = stateText.charAt(0)+stateText.charAt(stateText.length-1);
        console.log(code);
        console.log('Entering handleStatePost method');
        //console.log(state);
        fetch('http://localhost:8000/countries/' + countryCode + '/states/', {
          method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country: countryCode,
                state_text: stateText,
                state_code: code,
            })
        })
        console.log("fetched");
    }

    handleCountryDelete(countryCode) {
        console.log(countryCode + " Entering country delete method");
        fetch('http://localhost:8000/countries/' + countryCode, {
            method: 'DELETE'
        }).then(response => {
            response.json().then(json => {
            return json;
            });
        })
    }

    handleStateDelete(stateText) {
        console.log(stateText + " Entering delete method");
        fetch('http://localhost:8000/'+stateText, {
            method: 'DELETE'
        }).then(response => {
            response.json().then(json => {
                return json;
            });
        })
    }
    
  render() {
    return (
      <div>
      <Country handleCountryDelete={this.handleCountryDelete} handlePost={this.handleCountryPost} handler = {this.handleChange} state = {this.state}  />
      <State handleStateDelete = {this.handleStateDelete} handleStatePost = {this.handleStatePost} state = {this.state} />
      </div>
    );
  }
}


export default App;
ReactDOM.render(<App />, document.getElementById('root'));
