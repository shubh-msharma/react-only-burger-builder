import React from 'react'
import './toolbar.css'
import Navbar from "../navigation bar/navbar"
export default function toolbar(props) {
    return (
        <div className = "toolbar">
            <div 
            onClick ={props.opneSideDrawerHandler}
            className ="menu mobileOnly">MENU</div>
            <div className ="btn btn-outline-dark h-100 d-flex align-items-center my-auto">Saloni's Burger</div>
           <nav className ="desktopOnly">
            <Navbar/>
            </nav>
        </div>
    )
}
