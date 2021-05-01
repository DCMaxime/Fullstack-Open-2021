import React from "react";

const Total = ({ parts }) => {
    const sum = parts.reduce((s, p) => s + p.exercises, 0)
    return(
        <p>Number of exercises {sum}</p>
    )
}

export default Total