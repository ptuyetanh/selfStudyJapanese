import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlphabetFree extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <Link to='/login'
                    name=""
                    id=""
                    className="btn btn-primary mb-3"
                    role="button"
                >
                    <h3>{this.props.lesson}</h3>
                    <h2>あ</h2>
                    <p className="study_free">Học thử miễn phí</p>
                </Link>
            </div>
        );
    }
}

export default AlphabetFree;