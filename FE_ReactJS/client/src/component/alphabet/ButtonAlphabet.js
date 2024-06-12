import React, { Component } from 'react';

class ButtonAlphabet extends Component {
    button_alphabet_click = () => {
        var button_alphabet = document.querySelectorAll('.button_alphabet');
        for (var i = 0; i < button_alphabet.length; i++) {
            button_alphabet[i].onclick = function () {
                var audio = document.querySelector('.audios');
                var source = document.querySelector('source')
                source.src = this.getAttribute('data-srcAudio')
                console.log(source);
                audio.load();
                audio.play();
            }
        }
    }
    render() {
        return (
            <button
                className="btn btn-primary button_alphabet"
                data-srcaudio={"/sound/" + this.props.sound}
                onClick={() => this.button_alphabet_click()}
            >
                <audio className="audios">
                    <source src='' type="audio/mpeg" />
                </audio>
                <h2 className="name">{this.props.name}</h2>
                <h3 className="pronunciation">{this.props.pronunciation}</h3>
            </button>
        );
    }
}
export default ButtonAlphabet;