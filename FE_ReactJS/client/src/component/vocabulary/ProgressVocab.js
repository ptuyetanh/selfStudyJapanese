import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProgressVocab extends Component {
    render() {
        return (
            <div className="progress_vocab">
                <Link to = {this.props.linkto}>
                    <i className="fa-solid fa-xmark" />
                </Link>
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: this.props.score + '%' }}
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