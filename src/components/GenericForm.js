import React from 'react';

export default class GenericForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input 
                    type="text" 
                    placeholder="i'm watching everything you type"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                <button className="submit-btn">Submit</button>
                <br />
                <br />
                <div className="display-input-div">
                    <p className="display-input">{this.props.value}</p>
                </div>
                
            </form>
        );
    }
}