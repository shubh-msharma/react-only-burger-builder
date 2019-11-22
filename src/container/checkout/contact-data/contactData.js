import React, { Component } from 'react'
import Element from '../../../components/UI/form-elements/input-elements/inputElements'
import axios from 'axios'
import Modal from '../../../components/UI/modal/modal'
import Loader from '../../../components/UI/loader/loader'


function customFormElement(elementType, eleConfig, constraints = {}, options = null, isValid = true, touched = false) {
    return {
        elementType: elementType,
        eleConfig: eleConfig,
        options: options,
        constraints: constraints,
        isValid: isValid,
        touched: touched
    }
}
// const orderForm =  {
//     name: customFormElement('input', { type: 'text', placeholder: "your name", value: "" }, { required: true }, undefined, false),
//     email: customFormElement('input', { type: 'mail', placeholder: "your email", value: "" }, { required: true }, undefined, false),
//     country: customFormElement('input', { type: 'text', placeholder: "your country", value: "" }, { required: true }, undefined, false),
//     state: customFormElement('input', { type: 'text', placeholder: "your state", value: "" }, { required: true }, undefined, false),
//     city: customFormElement('input', { type: 'text', placeholder: "your city", value: "" }, { required: true }, undefined, false),
//     zipcode: customFormElement('input', { type: 'text', placeholder: "your zipcode", value: "" }, { required: true }, undefined, false),
//     feedback: customFormElement('input', { type: 'textarea', placeholder: "your feedback", value: "" }, { required: true, minlength: 10 }, undefined, false),
//     method: customFormElement('select', { id: 'method', name: "your method", value: "cheapest" }, undefined, [{ val: "cheapest", dispVal: "Cheapest" }, { val: "fastest", dispVal: "Fastest" }], true)
// }
export default class contactData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orderForm: {
                name: customFormElement('input', { type: 'text', placeholder: "your name", value: "" }, { required: true }, undefined, false),
                email: customFormElement('input', { type: 'mail', placeholder: "your email", value: "" }, { required: true }, undefined, false),
                country: customFormElement('input', { type: 'text', placeholder: "your country", value: "" }, { required: true }, undefined, false),
                state: customFormElement('input', { type: 'text', placeholder: "your state", value: "" }, { required: true }, undefined, false),
                city: customFormElement('input', { type: 'text', placeholder: "your city", value: "" }, { required: true }, undefined, false),
                zipcode: customFormElement('input', { type: 'text', placeholder: "your zipcode", value: "" }, { required: true }, undefined, false),
                feedback: customFormElement('input', { type: 'textarea', placeholder: "your feedback", value: "" }, { required: true, minlength: 10 }, undefined, false),
                method: customFormElement('select', { id: 'method', name: "your method", value: "cheapest" }, undefined, [{ val: "cheapest", dispVal: "Cheapest" }, { val: "fastest", dispVal: "Fastest" }], true)
            },
            loadingDataToServer:false
        }
    }
    placeOrderHandler = (event) =>{
        this.setState({loadingDataToServer:true})
        event.preventDefault();
        const customer = {};
        for(let key in this.state.orderForm){
            customer[key] = this.state.orderForm[key].eleConfig.value;
        }
        const order =  {
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer:customer,
            dateOfOrder:new Date().toLocaleString()
        }
        axios.post("https://burgerbuilder-103ca.firebaseio.com/order.json",order)
        .then(res=>{
            this.setState({loadingDataToServer:false})
            this.props.history.replace('/')
        })
    }
    CancelOrderHandler = ()=>{
        this.props.history.replace('/')
    }



    inputEventHandler = (event, key) => {
        const target = event.target;
        this.setState(prevState => {
            prevState.orderForm[key].eleConfig.value = target.value;
            prevState.orderForm[key].touched = true;
            return prevState
        })
    }

    componentDidMount(){
        document.getElementById("userData").scrollIntoView({ 
            behavior: 'smooth' 
          });
    }

    render() {
        return (

            <>
                {
                    this.state.loadingDataToServer?<Modal showModal = {this.state.loadingDataToServer}><Loader/></Modal>:null
                }
            <div id = 'userData' className="container-fluid w-100 h-100 mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-7">
                        <div className="card">
                            <div className="card-header">please provide your information</div>
                            <div className="card-body">
                                <form className="form-group" onSubmit = {this.placeOrderHandler}>
                                    {
                                        Object.keys(this.state.orderForm).map(field => {
                                            return <Element
                                                key={field}
                                                inputEventHandler={(event) => this.inputEventHandler(event, field)}
                                                eleConfig={this.state.orderForm[field].eleConfig}
                                                options={this.state.orderForm[field].options}
                                                element={this.state.orderForm[field].elementType} />
                                        })
                                    }
                                    <div className="card-footer d-flex justify-content-around align-items-center">
                                        <button type="submit"
                                        onClick = {this.placeOrderHandler}
                                        
                                        className=" btn btn-outline-success">Order</button >
                                        <button 
                                        onClick = {this.CancelOrderHandler}
                                        
                                        className=" btn btn-outline-danger">Cancel</button >
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>


        )
    }
}
