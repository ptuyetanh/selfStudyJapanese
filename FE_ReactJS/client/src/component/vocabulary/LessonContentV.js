import React, { Component } from 'react';

class LessonContentV extends Component {
    render() {
        return (
            <li>
                <p className="name_vocab">{this.props.name}</p>
                <p className="mean_vocab">{this.props.mean}</p>
            </li>
        );
    }
}

export default LessonContentV;