import React from 'react'
import './popup.css'

const Popup = ({onClick, text}) => { // props

    return <div className='popup-wrapper' onClick={() => onClick()}>
        <div className='popup-body'>
            {text}
        </div>
    </div>
}

export default Popup