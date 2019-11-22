




import React from 'react'

export default function order(props) {
    let  ingredient = null
    if(props.ingredients){
    ingredient = Object.keys(props.ingredients).map(ing=>{
    return <div key = {ing} className = "mx-1 p-1 border border-success rounded">{ing} : <strong>{props.ingredients[ing]}</strong></div>
    })}
    return (
        <div className = "d-flex my-3 col-12 col-sm-8 col-md-6 p-2 flex-column justify-content-center align-items-center border border-dark rounded">
            <div className = "d-flex ">
                <div className = "text-center">ingredients</div>
                {ingredient}
            </div>
            <div>price : {props.price}</div>
            <div>order date : {props.dateOfOrder}</div>
        </div>
    )
}
