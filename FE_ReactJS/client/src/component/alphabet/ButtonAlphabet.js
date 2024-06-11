import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonAlphabet extends Component {
    render() {
        return (
            <Link to
                name=""
                id=""
                className="btn btn-primary button_alphabet"
                role="button"
                data-srcaudio="assets/あ.mp3"
            >
                <audio className="audios">
                    <source src="" type="audio/mpeg" />
                </audio>
                <h2 className="name">あ</h2>
                <h3 className="pronunciation">a</h3>
            </Link>
        );
    }
}

export default ButtonAlphabet;