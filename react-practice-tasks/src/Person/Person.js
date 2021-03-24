import React from "react";
import './Person.css';


const person = (props) => {
    return (
        <div className="Person">
            {/* onClick method uplied on the p and when is clicked
             could be removed but the function for that is in the app.js file */}
    <p  onClick = {props.click}>I am {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />

    </div>
    )
}

export default person;