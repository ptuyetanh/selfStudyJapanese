import React, { Component } from 'react';

class AFlashcardActive extends Component {
    render() {
        return (
            <li className="flashcard active">
                <h1 className="name">{this.props.name}</h1>
                <p className="example">{this.props.example}</p>
            </li>
        );
    }
}

export default AFlashcardActive;