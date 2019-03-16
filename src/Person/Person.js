import React from 'react';
import './Person.css'


const person = (props) => {

    const style = {
        '@media (min width: 500px)' : {
            width : '450px' 
        } 
    }

    return (

        <div className="Person" style={style}>
            <p onClick={props.click}>Hellooo {props.name} I am {Math.floor(Math.random() * 30)}  </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>

    )
}

export default person;