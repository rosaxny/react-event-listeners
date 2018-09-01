import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.text}</button>
                <div>
                    <p>{this.props.reply}</p>
                </div>
                
            </div>   
        )
    }
}