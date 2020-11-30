import React from 'react'
import '../css/inputRow.css'
function InputRowComponent({removeRow}) {
    return (
        <div className="inputRow">
            <input className="inputRow__name" type="text" placeholder="Name" />
            <input className="inputRow__value" type="text" placeholder="Value"/>
            <button className="inputRow__button" onClick={removeRow}>X</button>
        </div>
    )
}

export default InputRowComponent
