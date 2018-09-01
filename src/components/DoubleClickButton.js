import React from 'react';

export default class DoubleClickButton extends React.Component {
    render() {
        return (
            <div>
                <button onDoubleClick={this.props.onDoubleClick}>{this.props.text}</button>
                <p>{this.props.facts}</p>  
            </div>
               
        );
    }
}