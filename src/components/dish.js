import React, { Component } from "react";

//Exportación nombrada
export class Flag extends Component {
    render(){
        return(
            <div>
                <h1>Bandera</h1>
            </div>
        )
    }
}

export class Ingredient extends Component {
    render(){
        return(
            <div>
                <h1>Ingredientes</h1>
            </div>
        )
    }
}

class Dish extends Component {
    render(){
        return(
            <div>
                <h1>Platillo</h1>
                <Ingredient />
            </div>
        )
    }
}

//Exportación por default
export default Dish;