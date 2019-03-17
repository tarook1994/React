import React, { Component } from 'react';


class ErrorBoundries extends Component {

    state = {
        isError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            isError : true,
            errorMessage : info
        })
    }


    render() {

        if (this.props.isError) {
          return (<h1>{this.state.errorMessage}</h1>)
        } else {
           return  (this.props.children)
        }
    }

}

export default ErrorBoundries