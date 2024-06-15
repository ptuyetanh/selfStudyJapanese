import React, { Component } from 'react';

class ProgressVocab extends Component {
    render() {
        return (
            <div className="progress_vocab">
                <i className="fa-solid fa-xmark" />
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                </div>
            </div>

        );
    }
}

export default ProgressVocab;