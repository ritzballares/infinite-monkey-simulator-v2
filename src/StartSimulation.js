import React from 'react';

function StartSimulation() {
  return (
    <div className='startSimulation'>
      <h2>Simulation</h2>
      <p>Enter any text in the textarea below and click <b>Start Simulation</b>. After clicking the button, the simulation process will begin, and you should start seeing the output in another section below.</p>
      <textarea id='inputArea' name='inputArea' placeholder='Enter text here...' rows='10' cols='80'></textarea>
      <br/>
      <button id='startSimulatonButton'>Start Simulation</button>
    </div>
  )
}

export default StartSimulation;