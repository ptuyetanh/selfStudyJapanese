import React, { Component } from 'react';

class ContentCount extends Component {
    render() {
        return (
            <div className={this.props.styles}>
                <h3>{this.props.tittle}</h3>
                <h3>{this.props.count}</h3>
            </div>
        );
    }
}

export default ContentCount;