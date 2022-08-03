import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border:'1px solid green', marging:'25px', padding:'5px'}} >
            <h2>Display components</h2>
            <p>Another steps {props.steps}</p>
            <Dial steps= {props.steps} ></Dial>
        </div>
    );
};

export default Display;