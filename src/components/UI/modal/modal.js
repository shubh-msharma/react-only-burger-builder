import React, { Fragment ,Component} from 'react'
import './modal.css'
import Backdrop from '../backdrop/backdrop'

export default class modal extends Component {

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.showModal !== this.props.showModal || nextProps.children !== this.props.children }

    render() {
        return (
            <Fragment>
            <Backdrop 
            backdropClickHandler = {this.props.backdropClickHandler}
            showBackdrop = {this.props.showModal}/>
            <div className = {this.props.showModal?"Modal show":"Modal hide"}>
                {this.props.children}
            </div>
            </Fragment>
        )
    }
}
