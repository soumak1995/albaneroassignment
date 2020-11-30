import React from 'react'
import '../css/card.css'
function Card({removeCard}) {
    return (
        <div className="card">
            <h6>Name</h6>
            <h6>Value</h6>
            <h6>Id</h6>
        </div>
    )
}

export default Card
