import React from 'react';
import Header from './Header';
import About from './About';
import AlgorithmInfo from './AlgorithmInfo'

class Simulation extends React.Component {
    render() {
        return (
            <div className='simulation'>
                < Header/>
                < About/>
                < AlgorithmInfo/>
            </div>

        );
    }
}

export default Simulation;