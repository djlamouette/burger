import React, { Component } from 'react'

import BuildControls from './buildControls/buildControls'
import Burger from './burger/burger'

export class burgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 1,
            cheese: 1,
            tomato: 1,
            bacon: 0
        }
    }


    render() {
        return (
            <div className="burgerBuilder">
                <Burger __ingredients={this.state.ingredients} />
                <BuildControls __ingredients={this.state.ingredients}/>
                
            </div>
        )
    }
}

export default burgerBuilder
