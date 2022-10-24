import React, { Component } from 'react'
export default class TextInput extends Component {
  render() {
    const {focus,name,type,label,value,onChange,onInput,onFocus,onBlur,id , ...left} = this.props;
    return (
        <div className="text-input">
        <input
        placeholder={label}
            className={(
                this.props.focus || this.props.value !== '')
                ? 'input-focus'
                : ''}
            type={this.props.type?this.props.type:"text"}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            onInput={this.props.onInput}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            id={this.props.name}
            {...left}/>
    </div>
    )
  }
}