import React from 'react'
import { NavLink } from 'react-router-dom'
import './navLink.css'
export default function navLink(props) {
    return (
        <li className="Nav-item">
            <NavLink exact to={props.link}>{props.title}</NavLink>
        </li>
    )
}
