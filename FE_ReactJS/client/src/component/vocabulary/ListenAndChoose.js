import React, { Component } from 'react';

class ListenAndChoose extends Component {
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
    clickOptionChoose = () => {
        var optionChoose = document.querySelectorAll('.optionChoose')
        console.log(optionChoose);
        for (var i = 0; i < optionChoose.length; i++) {
            optionChoose[i].onclick = function () {
                for (let a = 0; a < optionChoose.length; a++) {
                    optionChoose[a].classList.remove('optionChooseColor')

                }
                this.classList.add('optionChooseColor')
            }
        }
    }
    render() {
        console.log(this.props.vocab_id);
        return (
            <div className="listenAndChoose">
                <h2>Hãy nghe và chọn đáp án</h2>
                <div className="sound_listen">
                    <audio className="audios">
                        <source src={"/sound/" + this.props.sound} type="audio/mpeg" />
                    </audio>
                    <i className="fa-solid fa-volume-high" onClick={() => this.clickIconSound()} />
                </div>
                <div className="optionChooseALL">
                    <button type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose()}>
                        学生
                    </button>
                    <button type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose()}>
                        学生
                    </button>
                    <button type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose()}>
                        学生
                    </button>
                    <button type="button" className="btn btn-primary optionChoose" onClick={() => this.clickOptionChoose()}>
                        学生
                    </button>
                </div>
                <button name="" id="" className="btn btn-primary check">
                    kiểm tra
                </button>
            </div>
        );
    }
}

export default ListenAndChoose;