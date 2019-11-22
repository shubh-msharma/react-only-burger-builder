import React from 'react'
import CustomNavLink from './navigation link/navLink'

export default function navbar(props) {
    const links = {
        "burger builder":"/",
        "orders":"/orders"
    }
    return (
        <ul className={props.isSidedrawerOpen?"list-group w-100 mt-4":"d-flex flex-row justify-content-center align-items-center my-0 h-100"}>
                {Object.keys(links).map(nl=>{
                    return <CustomNavLink key = {nl} link = {links[nl]} title = {nl}/>
                })}
        </ul>
    )
}
