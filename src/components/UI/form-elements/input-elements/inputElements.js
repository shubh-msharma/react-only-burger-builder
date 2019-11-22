import React from 'react'

export default function inputElements(props) {
    switch (props.element) {
        case 'input':
            return <input  onChange = {props.inputEventHandler} className="form-control" {...props.eleConfig} />
        case 'select':
            return <select  onChange = {props.inputEventHandler} className="form-control" {...props.eleConfig}>
                {
                    props.options.map(optn=>{
                    return <option className="form-control" key={optn.val} value={optn.val}>{optn.dispVal}</option>
                    })
                }
            </select>
        default:
            break;
    }
}
