import React, {Component} from 'react'

import BuildControls from './buildControls/buildControls'
import Burger from './burger/burger'

export class burgerBuilder extends Component {

    state = {
        ingredients: {
            Cheese: 1,
            Bacon: 1,
            Meat: 1,
            Salad: 0
        }
    }

    increaseIngredientHandler = (ingredient) => {
        if (this.state.ingredients[ingredient] < 5) {
            this.setState(prevState => {
                let ingredients = {
                    ...this.state.ingredients
                }
                ingredients[ingredient] = prevState.ingredients[ingredient] + 1;
                return {ingredients}
            })
        }
    }

    decreaseIngredientHandler = (ingredient) => {
        if (this.state.ingredients[ingredient] > 0 ) {
            this.setState(prevState => {
                let ingredients = {
                    ...this.state.ingredients
                }
                ingredients[ingredient] = prevState.ingredients[ingredient] - 1;
                return {ingredients}
            })
        }
    }

    render() {
        return (
            <div className="burgerBuilder">
                <Burger __ingredients={this.state.ingredients}/>
                <BuildControls
                    __ingredients={this.state.ingredients}
                    __increase={this.increaseIngredientHandler}
                    __decrease={this.decreaseIngredientHandler}/>

            </div>
        )
    }
}

export default burgerBuilder
