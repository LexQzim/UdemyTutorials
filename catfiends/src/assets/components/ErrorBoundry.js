import React, {Component} from 'react';
import { render } from 'react-dom';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch ({error, info}) {
        this.setState({hasError:true})
    }

    render() {
        if(this.state.hasError){
            return <h1>Something went wrong. Call your IT for help</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;