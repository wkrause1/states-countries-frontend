import React from 'react';

class State extends React.Component {

    render() {
        console.log('Rendering state');
        let states = this.props.state.states;
        states.sort(function(a,b) {return (a.state_text > b.state_text) ? 1 : ((b.state_text> a.state_text) ? -1:0);});
        let optionItems = states.map((state) =>
            <option key = {state.state_code}> {state.state_text} </option>
        );
        let input = <input id = 'stateText' />
        let input2 = <input id = 'countryCode' />
        let input3 = <input id = 'stateDelete' />
        return (
            <div>
                <select>
                    {optionItems}
                </select>
                <br></br><br></br>
                State: {input}
                Country Code: {input2}
                <button onClick = {() => {
                this.props.handleStatePost(document.getElementById('countryCode').value, document.getElementById('stateText').value)}
                }> POST State </button>
                <br></br><br></br>
                State to Delete: {input3}
                <button onClick={() => {
                    this.props.handleStateDelete(document.getElementById('stateDelete').value)}}> Delete :( </button>
            </div>
        )
    }
}

export default State;