import React from 'react'
import './buildControls.css'
import BuildControl from './buildControl/buildControl'

const buildControls = ( props ) => {
    let ingredientsList = Object.keys(props.__ingredients).map((ingredient, index) => {
       return <BuildControl __ingredient={ingredient} key={index} __increase={props.__increase} __decrease={props.__decrease}/>
    })



    return (
        <div className="container">
            <div className="row buildControls">
                {ingredientsList}
            </div>
        </div>
    )
}

export default buildControls
