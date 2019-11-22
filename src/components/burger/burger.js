import React from 'react'
import BurgerIngredients from './burger-ingredients/burgerIngredients'
import './burger.css'

export default function burger(props) {
    let ingredientsArray = Object.keys(props.ingredients).map(ings=>{
        return [...Array(props.ingredients[ings])].map((val,index)=>{
            return <BurgerIngredients key = {ings + index} type={ings}/>
        })
    }).reduce((pre,ele)=>{
         pre = [...pre,...ele]
         return pre
    },[])
    if(ingredientsArray.length === 0){
        ingredientsArray = <p>please add some ingredients !!</p>
    }
    return (
        <div className = "burger">
            <BurgerIngredients type="breadTop"/>
            {ingredientsArray}
            <BurgerIngredients type="breadBottom"/>
        </div>
    )
}
