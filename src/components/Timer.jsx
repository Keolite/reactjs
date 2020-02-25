import React, { Component } from 'react';


class Timer extends Component {
    state = { 
        duration: 5,
        handle: 0,
        message: ''
     };

    render() { 
        return ( 
            <div>
                <h2>Composant Timer</h2>
                <p>{this.state.duration}</p>
            </div>
            
         );
    }
}
 
export default Timer;