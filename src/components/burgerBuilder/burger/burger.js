import React from 'react'

const burger = ( props ) => {
    
    return (
        <div className="burger">
            <p>meat : {props.__ingredients.meat}</p>
            <p>cheese : {props.__ingredients.cheese}</p>
            <p>tomatoes : {props.__ingredients.tomato}</p>
            <p>bacon : {props.__ingredients.bacon}</p>
        </div>
    )
}

export default burger
