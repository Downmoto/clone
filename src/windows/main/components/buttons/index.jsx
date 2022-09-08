import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from './button.jsx'
import ButtonContainer from './container.jsx';

const buttonArrayCol = [
    <Button intent='record' onClick={debug} key={uuidv4()} />,
    <Button intent='clip' onClick={debug} key={uuidv4()} />,
    <Button intent='capture' onClick={debug} key={uuidv4()} />,
    <Button intent='gif' onClick={debug} key={uuidv4()} />,
]

const buttonArrayRow = [
    <Button intent='displays' onClick={getDisplaySources} key={uuidv4()} />,
    <Button intent='settings' onClick={debug} key={uuidv4()} />,
]

function Buttons() {

    return (
        <div className='left-cnt'>
            <ButtonContainer 
                dimension='col' 
                buttonArray={buttonArrayCol}
            />

            <ButtonContainer 
                dimension='row' 
                buttonArray={buttonArrayRow} 
            />
        </div>
    )
}

let api = window.captureApi

function debug() {
    console.log('function debug')
}

async function getDisplaySources() {
    await api.getDisplaySources()
}

export default Buttons;