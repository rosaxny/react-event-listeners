import React from 'react';

export default class HoverButton extends React.Component {
    render() {
        return (
            <div>
                <button onMouseOver={this.props.onMouseOver}>{this.props.text}</button>
                <p>{this.props.sad}</p>
            </div>
        );
    }
}