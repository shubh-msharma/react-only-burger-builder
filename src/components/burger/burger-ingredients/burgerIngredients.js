import React from 'react'
import './burgerIngredients.css'

export default function burgerIngredients(props) {
    switch (props.type) {
        case "breadBottom":
            return <div className="BreadBottom"></div>;
        case "breadTop":
            return (<div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>);
        case "meat":
            return <div className="Meat"></div>;
        case "cheese":
            return <div className="Cheese"></div>;
        case "salad":
            return <div className="Salad"></div>;
        case "bacon":
            return <div className="Bacon"></div>;
        default:
            break;
    }
}
