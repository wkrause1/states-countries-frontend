import React from 'react';

class Country extends React.Component {

    handleChange = (event) => {
        this.props.handler(event.target.value);
    }

    render() {
        console.log('Rendering Country');
        let countries = this.props.state.countries;
        countries.sort(function(a,b) {return (a.country_text > b.country_text) ? 1 : ((b.country_text> a.country_text) ? -1:0);});
        let optionItems = countries.map((country) =>
            <option value = {country.country_code}> {country.country_text}</option>
    );
        let textBox = <input id='country'/>;
        let countryDeleteBox = <input id='countryDelete' />;

        return <div>
            <select id='count' onChange={this.handleChange}>
                {optionItems}
            </select>
            Country to Post: {textBox}
            <button onClick={() => {
                this.props.handlePost(document.getElementById('country').value);
            }}>POST Country
            </button>
            <br></br><br></br>
            Country to Delete: {countryDeleteBox}
            <button onClick={() => {
            this.props.handleCountryDelete(document.getElementById('countryDelete').value);}
            }>Delete Country</button>

        </div>
    }
}
export default Country;

