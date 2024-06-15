import React, { Component } from 'react';
import OptionChoose from './OptionChoose';

class ListenAndChoose extends Component {
    render() {
        return (
            <div className="listenAndChoose">
                <h2>Hãy nghe và chọn đáp án</h2>
                <div className="sound_listen">
                    <audio className="audios">
                        <source src="./assets/学生.mp3" type="audio/mpeg" />
                    </audio>
                    <i className="fa-solid fa-volume-high" />
                </div>
                <div className="optionChooseALL">
                    <OptionChoose/>
                    <OptionChoose/>
                    <OptionChoose/>
                    <OptionChoose/>
                </div>
                <a name="" id="" className="btn btn-primary check" href="#" role="button">
                    kiểm tra
                </a>
            </div>
        );
    }
}

export default ListenAndChoose;