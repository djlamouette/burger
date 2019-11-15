import React from 'react'
import BuildControl from './buildControl/buildControl'

const buildControls = ( props ) => {
    let ingredientsList = Object.keys(props.__ingredients).map((ingredient, index) => {
       return <BuildControl __ingredient={ingredient} key={index}/>
    })

    return (
        <div className="container buildControls">
            <div className="row">
                {ingredientsList}
            </div>
        </div>
    )
}

export default buildControls
