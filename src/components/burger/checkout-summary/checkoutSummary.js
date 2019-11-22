import React from 'react'
import Burger from '../../burger/burger'

export default function checkoutSummary(props) {
    return (
        <div className = "d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-5 text-center">your burger is ready</h1>
            <p className = "display-6">hope this tasts well</p>
            <Burger ingredients = {props.ingredients}/>
            <div className="d-flex flex-row justify-content-center align-items-center my-4 px-3">
            <button
            onClick  = {props.checkingOutContinueHandler}
            className="btn my-0 mx-3 p-2 btn-outline-success btn-lg">continue</button>
            <button
            onClick  = {props.checkingOutCancelHandler}
            className="btn my-0 mx-3 p-2 btn-outline-danger btn-lg">cancel</button>
            </div>

        </div>
    )
}
