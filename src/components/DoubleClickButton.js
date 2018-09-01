import React from 'react';

export default class DoubleClickButton extends React.Component {
    render() {
        return (
            <button onDoubleClick={this.props.onDoubleClick}>{this.props.text}</button>
        );
    }
}