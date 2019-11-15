import React from 'react'

const buildControl = (props) => {
    return (
        <div className="buildControl">
            <p>{props.__ingredient}</p>
            <div className="buttons">
                <button onClick={(__ingredient) => props.__increase(props.__ingredient)}>+</button>
                <button onClick={(__ingredient) => props.__decrease(props.__ingredient)}>-</button>
            </div>
        </div>
    )
}

export default buildControl
