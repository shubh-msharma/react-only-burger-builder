import React, { Component, Fragment } from 'react'
import Modal from '../../components/UI/modal/modal'


export default function errorHandler(ErrorProneComponent,axios) {
    
    return class extends Component {
        constructor(props){
            super(props);
            this.state = {error:null};
            this.reqInterceptor = axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error})
            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor)
        }
        errorConfirmHandler = ()=>{
            this.setState({error:null})
        }
        render() {
            return (
                <Fragment>
                    <Modal 
                    backdropClickHandler = {this.errorConfirmHandler}
                    showModal = {this.state.error}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                    <ErrorProneComponent {...this.props} />
                </Fragment>
            )
        }
    }
}

