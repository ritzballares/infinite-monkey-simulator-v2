import React from 'react';
import './index.css';
import Header from './Header';
import About from './About';
import AlgorithmInfo from './AlgorithmInfo'
import StartSimulation from './StartSimulation';

class Simulation extends React.Component {
  render() {
    return (
      <div className='simulation'>
        < Header />
        < About />
        < AlgorithmInfo />
        < StartSimulation />
      </div>

    );
  }
}

export default Simulation;