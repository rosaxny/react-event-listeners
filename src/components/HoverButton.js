import React from 'react';

export default class HoverButton extends React.Component {
    render() {
        return (
            <button onMouseOver={this.props.onMouseOver}>{this.props.text}</button>
        );
    }
}