import React, { Component } from 'react'
import Burger from '../../components/burger/burger'
import BurgerBuildingPannel from '../../components/burger/burger-making-control/burgerBuildingPannel'
import Modal from '../../components/UI/modal/modal'
import OrderSummary from '../../components/burger/order-summary/orderSummary'
import 'bootstrap/dist/css/bootstrap.css'
const INGREDIENTS_PRICE = {
    salad: 20,
    cheese: 25,
    bacon: 35,
    meat: 40
}
export default class burgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        price: 100,
        purchasing:false
    }
    // changing ingredients amount
    addIngredientsHandler = (ingredient) => {

        this.setState(prevState => {
            prevState.ingredients[ingredient] += 1;
            prevState.price += INGREDIENTS_PRICE[ingredient]
            return prevState
        })
    }
    removeIngredientsHandler = (ingredient) => {
        if (this.state.ingredients[ingredient] <= 0) return
        this.setState(prevState => {
            prevState.ingredients[ingredient] -= 1;
            prevState.price -= INGREDIENTS_PRICE[ingredient]
            return prevState
        })
    }

    continueAndShowModalHandler = ()=>{
        this.setState(prevState=>{
            return {purchasing : true}
        })
    }
    canclePurchasingHandler = ()=>{
        this.setState(prevState=>{
            return {purchasing : false}
        })
    }
    continuePurchaseHandler = ()=>{
        let queryString = Object.entries(this.state.ingredients).map(entr=>{
            return encodeURIComponent(entr[0])+'='+encodeURIComponent(entr[1])
        }).join('&').concat(`&price=${encodeURIComponent(this.state.price)}`);
        
        this.props.history.replace({
            pathname:'/checkout',
            search:'?'+queryString
        })
    }
    

    render() {

        const shouldItBeDisabled = {...this.state.ingredients}
        for(let key in shouldItBeDisabled){
            shouldItBeDisabled[key] = Boolean(shouldItBeDisabled[key])
        }

        return (
            <div className = "mt-4">
                
                <Burger ingredients={this.state.ingredients} />

                <BurgerBuildingPannel
                price = {this.state.price}
                shouldItBeDisabled = {shouldItBeDisabled}
                addIngredientsHandler={this.addIngredientsHandler}
                removeIngredientsHandler={this.removeIngredientsHandler}
                continueAndShowModalHandler = {this.continueAndShowModalHandler}
                />

                <Modal
                backdropClickHandler = {this.canclePurchasingHandler}
                showModal = {this.state.purchasing}>
                    <OrderSummary
                        continuePurchaseHandler = {this.continuePurchaseHandler}
                        cancelPurchaseHandler = {this.canclePurchasingHandler}
                    ingredients = {this.state.ingredients} 
                    price = {this.state.price}/>
                </Modal>
            </div>
        )
    }
}
