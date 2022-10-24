import React, {Component} from 'react'

export default class TextArea extends Component {
    render() {
        return (
            <div className="text-area">
                <textarea
                placeholder={this.props.label}
                    className={(
                        this.props.focus || this.props.value !== '')
                        ? 'input-focus'
                        : ''}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onInput={this.props.onInput}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}/>
            </div>
        )
    }
}
