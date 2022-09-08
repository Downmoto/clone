import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function ButtonContainer(props) {

    return (
        <div className={`btn-cnt-${props.dimension}`}>
            {props.buttonArray}
        </div>
    )
}



export default ButtonContainer;