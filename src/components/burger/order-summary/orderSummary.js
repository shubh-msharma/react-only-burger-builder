



import React from 'react'

export default function orderSummary(props) {
    const ingredientsList = Object.keys(props.ingredients).map(ing => {
        return <li key = {ing} className="list-group-item">{ing} : {props.ingredients[ing]}</li>
    })
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">your order</div>
            </div>
            <div className="card-body">
                <ul className="list-group my-2">
                    {ingredientsList}
                </ul>
                <span className="font-weight-bold">price : {props.price}</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-success btn-sm mx-2" onClick = {props.continuePurchaseHandler}>continue</button>
                <button className="btn btn-danger btn-sm mx-2" onClick = {props.cancelPurchaseHandler}> cancel</button>
            </div>
        </div>
    )
}
