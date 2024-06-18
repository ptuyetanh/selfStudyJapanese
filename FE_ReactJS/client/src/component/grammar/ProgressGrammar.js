import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProgressGrammar extends Component {
    render() {
        return (
            <div className="progress_Grammar">
                <Link to={this.props.linkto}>
                    <i className="fa-solid fa-xmark" />
                </Link>
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: this.props.score + '%' }}
                        aria-valuenow={5.56}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                </div>
            </div>
        );
    }
}

export default ProgressGrammar;