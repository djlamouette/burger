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

    increaseIngredientHandler = (ingredient) => {
        if (this.state.ingredients[ingredient] < 5) {
            this.setState({ingredients[ingredient]: this.state.ingredients[ingredient]++})
        }
        
    }

    decreaseIngredientHandler = (ingredient) => {
        console.log(ingredient)
    }


    render() {
        return (
            <div className="burgerBuilder">
                <Burger __ingredients={this.state.ingredients} />
                <BuildControls
                 __ingredients={this.state.ingredients}
                 __increase={this.increaseIngredientHandler}
                 __decrease={this.decreaseIngredientHandler}/>
                
            </div>
        )
    }
}

export default burgerBuilder
