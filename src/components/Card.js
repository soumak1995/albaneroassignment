import React from 'react'
import '../css/card.css'
function Card({removeCard}) {
    return (
        <div className="card">
            <section className="card__section">
                <h5 >Name</h5>
                <h5>Value</h5>
            </section>
            <section className="card__section">
                <h5>ID</h5>
            </section>
        </div>
    )
}

export default Card
