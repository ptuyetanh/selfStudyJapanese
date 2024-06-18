import React, { Component } from 'react';

class LessonContentG extends Component {
    render() {
        return (
            <li>
                <p className="name_grammar">{this.props.name + ' : '}</p>
                <p className="mean_grammar">{this.props.mean}</p>
            </li>
        );
    }
}

export default LessonContentG;