




import React from 'react'

export default function backdrop(props) {
    
    return props.showBackdrop?<div className = "w-100 h-100 fixed-top" style={{zIndex:"400",background:"rgba(0,0,0,0.6)"}} onClick = {props.backdropClickHandler}></div>:null
}
