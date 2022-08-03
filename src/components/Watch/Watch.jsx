import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () =>{
        const countSteps = steps + 1;
        setSteps(countSteps);
    };

    return (
        <div style={{border:'1px solid red', margin:'15px'}} >
            <h2>This is Watch Components</h2>
            <h3>Steps: {steps}</h3>
            <button onClick={increaseSteps} >Increase</button>
            <Display steps = {steps} ></Display>
        </div>
    );
};

export default Watch;