import React, {Component} from 'react'

export default class Form extends Component {
    render() {
        
    const {children , ...left} = this.props;
        return (
            <form className="form" {...left}>{children}</form>
        )
    }
}
