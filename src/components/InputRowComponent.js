import React from 'react'

function InputRowComponent({removeRow}) {
    return (
        <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Value"/>
            <button onClick={removeRow}>X</button>
        </div>
    )
}

export default InputRowComponent
