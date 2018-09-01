import React from 'react';

export default class Button extends React.Component {
    render() {
        console.log(this.props)
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}