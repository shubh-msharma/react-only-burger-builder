





import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Order from '../../components/order/order'
import axios from 'axios'
import ErrorHandler from '../../hoc/withErrorHandler/errorHandler'
import Loader from '../../components/UI/loader/loader'

 class orders extends Component {
    state = {
        ordersArray: null,
        loading:true
    }
    componentDidMount() {

        axios.get("https://burgerbuilder-103ca.firebaseio.com/order.json")
            .then(res => {
                if(!res)return
                const ordersArray = Object.keys(res.data).map(id => {
                    return {
                        id, ...res.data[id]
                    }
                })
                this.setState(prevState => {
                    return { ordersArray: ordersArray ,loading:false}
                })
            }).catch(err => {
                console.log(err);
            })
    }
    render() {
        let order = <Loader/>
        if(!this.state.loading){
            order = this.state.ordersArray.map(order => {return <Order key={order.id} {...order} />})
        }
        return (
            <div className="d-flex flex-column p-2 justify-content-center align-items-center">
                        {
                            order
                        }                        
            </div>
        )
    }
}

export default ErrorHandler(orders,axios)