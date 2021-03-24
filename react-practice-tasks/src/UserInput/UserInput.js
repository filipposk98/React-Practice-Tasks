import React from 'react'
import VerticalSpace from '../VerticalSpace/VerticalSpace';

const UserInput = (props) => {
    return (
        <div>
        <p>Add something and will appear in  the input field</p>

    <VerticalSpace height={20} /> 

        <input type='text' 
        onChange={props.changed} 
        value={props.currentName}>

        </input>

        </div>

    )
}

export default UserInput;