import React from 'react'


const UserOutput = (props) => {
    
    return (
     
        <div className="NotesWrap">
             <p>The UserName? or the data added in the input field? </p>
                <textarea placeholder={props.userName}></textarea>
       
        </div>

    )
}

export default UserOutput;