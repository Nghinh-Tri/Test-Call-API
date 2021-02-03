import React, { Component } from 'react';
import { callAPI } from './util';

class App extends Component {

    connectApi = () => {
        console.log('call api')
        callAPI('Certification/getCertifications', 'GET', null).then(res => {
            console.log('data',res.data)
        })
    }

    render() {
        return (
            <div>
                {this.connectApi()}
            </div>
        );
    }
}

export default App;