import React from 'react'

const buildControl = ( props ) => {
    return (
        <div className="buildControl">
            <p>{props.__ingredient}</p>
            <button>+</button>
            <button>-</button>
        </div>
    )
}

export default buildControl
