import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props) {
    
    super(props);


    this.state = {

      isDisabled: false

    }

  }
  render() {

    const {children, className , ...left} = this.props;
    
    return (
      <button className={className?className:"button"} disabled={this.state.isDisabled} {...left}>{children}</button>
    )
  }
}
