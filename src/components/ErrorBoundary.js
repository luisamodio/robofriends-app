import React, {Component} from 'react';
import { render } from '@testing-library/react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <h1>Oooooooops!!!! <br></br> Somethin went wrong...</h1>
        }
        return this.props.children
    }

}

export default ErrorBoundary;