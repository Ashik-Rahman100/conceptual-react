import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:"1px solid blue", margin:'50px'}}>
            <h2>This is Dial Components</h2>
            <h4>Other Running steps: {props.steps}</h4>
        </div>
    );
};

export default Dial;