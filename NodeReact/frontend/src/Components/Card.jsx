import React from "react";
import "./Card.css"

function Card (props) {
    return (
        <div className="card">
            <h1>{props.timeValue}</h1>
            <p>{props.timeType}</p>
        </div>
    )
}

export default Card;