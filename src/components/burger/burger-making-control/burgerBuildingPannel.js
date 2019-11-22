import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import BurgerPannelComps from './burger-making-pannel-comps/burgerPannelComps'

export default function burgerBuildingPannel(props) {

    const controlsFor = [
        { label: "Salad", type: "salad" },
        { label: "Cheese", type: "cheese" },
        { label: "Bacon", type: "bacon" },
        { label: "Meat", type: "meat" }
    ]

    return (
        <div className="d-flex flex-column bg-light justify-content-center align-items-center">
            <div className="text-center text-bold">price:<strong>{props.price}</strong></div>
            {
                controlsFor.map(ctrl => {
                    return <BurgerPannelComps
                        shouldItBeDisabled = {props.shouldItBeDisabled[ctrl.type]}
                        key={ctrl.type}
                        addIngredientsHandler={() => props.addIngredientsHandler(ctrl.type)}
                        removeIngredientsHandler={() => props.removeIngredientsHandler(ctrl.type)}
                        label={ctrl.label} />
                })
            }
            <button 
            disabled = {Object.values(props.shouldItBeDisabled).reduce((nxt,ele)=>{return nxt&& !ele},true)}
            onClick = {props.continueAndShowModalHandler}
            className = "btn btn-outline-primary p-3 text-capitalize font-weight-bold btn-lg">order now</button>
        </div>
    )
}