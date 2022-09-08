import React from 'react'

function Button(props) {

    return (
        <button onClick={props.onClick}>
            {props.intent}
        </button>
    )
}

export default Button;
