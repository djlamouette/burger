import React from 'react'

import './burger.scss'

const burger = ( props ) => {


    const ingredients = Object.keys(props.__ingredients).map((ingredient, index) => {
        return (            
            [...Array(props.__ingredients[ingredient])].map((_, j) => {
                return <div className={"ingredient " + ingredient} key={ingredient + j}></div> 
            })
        );
    });
    
    return (
        <div className="burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients}
            <div className="BreadBottom"></div>
        </div>
    )
}

export default burger
