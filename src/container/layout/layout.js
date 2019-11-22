import React, { Component } from 'react'
import './layout.css'
import Toolbar from '../../components/navigation/toolbar/toolbar'
import SideDrawer from '../../components/navigation/side drawer/sideDrawer'

export default class layout extends Component {
    state = {
        isSidedrawerOpen:false
    }

    opneSideDrawerHandler = ()=>{
        this.setState({isSidedrawerOpen:true})
    }

    closeSideDrawerHandler = ()=>{
        this.setState({isSidedrawerOpen:false})
    }

    render() {
        return (
            <div>
                <Toolbar
                opneSideDrawerHandler =  {this.opneSideDrawerHandler}
                />
                <SideDrawer
                isSidedrawerOpen = {this.state.isSidedrawerOpen}
                closeSideDrawerHandler = {this.closeSideDrawerHandler}
                />
                <div className = "content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
