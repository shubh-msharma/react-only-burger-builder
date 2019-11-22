import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
export default function burgerPannelComps(props) {
    const  styles = {
        width:"70px",
        textAlign:"center",
        margin:"2px",
        marginTop:"auto",
        marginBottom:"auto"
    }
    return (
        <div className="d-flex flex-row justify-content-center my-2 mx-3">
            <div className="px-2 " style = {styles}>{props.label}</div>
            <div className = "px-2" style = {styles}><button onClick = {props.addIngredientsHandler} className="d-block btn btn-outline-success">more</button></div>
            <div className = "px-2" style = {styles}><button 
            onClick = {props.removeIngredientsHandler} 
            disabled = {!props.shouldItBeDisabled}
            className="d-block btn btn-outline-warning">less</button></div>
        </div>
    )
}
