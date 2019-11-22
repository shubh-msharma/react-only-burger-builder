import React, { Component , Fragment } from 'react'
import CheckoutSummary from '../../components/burger/checkout-summary/checkoutSummary'
import { Route } from 'react-router'
import ContactForm from './contact-data/contactData'


export default class checkout extends Component {
    state = {
        ingredients: null,
        price: null
    }

    componentDidMount() {
        const ingredients = {};
        let price = 0
        const query = new URLSearchParams(this.props.location.search)
        for (let entr of query.entries()) {
            if (entr[0] === 'price') {
                price = +entr[1]
            } else {
                ingredients[entr[0]] = +entr[1]
            }
        }
        this.setState(prevState => {
            return {
                ingredients: ingredients,
                price: price
            }
        })
    }
    checkingOutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    checkingOutCancelHandler = () => {
        this.props.history.replace('/');
    }

    render() {

        return (
            <Fragment>
            <div className = "mt-3">
                {
                    this.state.ingredients ? <CheckoutSummary
                        checkingOutContinueHandler={this.checkingOutContinueHandler}
                        checkingOutCancelHandler={this.checkingOutCancelHandler}
                        ingredients={this.state.ingredients}
                        price={this.state.price} /> : <p>loading....</p>
                }
            </div>
            <Route path={ this.props.match.url + '/contact-data'} render = {(props)=><ContactForm {...props} ingredients = {this.state.ingredients} price = {this.state.price}/>}/>
            </Fragment>
        )
    }
}
