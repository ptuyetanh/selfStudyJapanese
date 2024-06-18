import React, { Component } from 'react';

class Flashcard extends Component {
    clickIconSound = () => {
        var clickIcon = document.querySelector('.fa-solid.fa-volume-high');
        console.log(clickIcon);
        var soundCard = document.querySelector('.audios');
        clickIcon.onclick = function () {
            soundCard.play();
            this.classList.toggle('scale');
            this.addEventListener("webkitAnimationEnd", function () {
                this.classList.remove('scale')
            })
        }
    }

    flashCardsBeforeClick = () => {
        var flashCardsBefore = document.querySelector('.flashCards .flashcardBefore');
        var flashCardsAfter = document.querySelector('.flashCards .flashcardAfter');
        flashCardsBefore.onclick = function () {
            this.classList.add('hiddenBefore');
            flashCardsAfter.classList.add('showAfter');
            this.classList.remove('showBefore');
            flashCardsAfter.classList.remove('hiddenAfter');
        }
    }

    flashCardsAfterClick = () => {
        var flashCardsBefore = document.querySelector('.flashCards .flashcardBefore');
        var flashCardsAfter = document.querySelector('.flashCards .flashcardAfter');
        flashCardsAfter.onclick = function () {
            flashCardsBefore.classList.remove('hiddenBefore');
            this.classList.remove('showAfter');
            flashCardsBefore.classList.add('showBefore');
            this.classList.add('hiddenAfter');
        }
    }
    render() {
        return (
            <div className="flashCards">
                <div className="sound_flash_cards">
                    <audio className="audios">
                        <source src={'/sound/' + this.props.sound} type="audio/mpeg" />
                    </audio>
                    <i className="fa-solid fa-volume-high" onClick={() => this.clickIconSound()}/>
                </div>
                <div className="flashcardBefore" onClick={() => this.flashCardsBeforeClick()}>
                    <h2 className="name">{this.props.name}</h2>
                    <p className="example">{this.props.example}</p>
                </div>
                <div className="flashcardAfter" onClick={() => this.flashCardsAfterClick()}>
                    <h3 className="mean">{'Ý nghĩa:' + this.props.mean}</h3>
                    <h3 className="mean_example">{'VD: '+ this.props.mean_example}</h3>
                    <h3 className="explain">
                        {'Giải thích: ' + this.props.explain}
                    </h3>
                </div>
                <i className="fa-solid fa-hand-pointer" />
                <button className="btn btn-primary continue" onClick={this.props.howToLearnNext}>
                    Tiếp tục
                </button>
            </div>

        );
    }
}

export default Flashcard;