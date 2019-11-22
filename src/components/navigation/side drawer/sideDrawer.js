











import React, { Fragment } from 'react'
import NavBar from '../navigation bar/navbar'
import Backdrop from '../../UI/backdrop/backdrop'
import './sideDrawer.css'



export default function sideDrawer(props) {
    return (
        <Fragment>
            <Backdrop showBackdrop = {props.isSidedrawerOpen} 
            backdropClickHandler = {props.closeSideDrawerHandler}
            />
            <div className={props.isSidedrawerOpen?"sideDrawer open":"sideDrawer close"}>
                <NavBar isSidedrawerOpen = {props.isSidedrawerOpen}/>
            </div>
        </Fragment>
    )
}
