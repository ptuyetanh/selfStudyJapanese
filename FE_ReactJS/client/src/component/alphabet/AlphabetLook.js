import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlphabetLook extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <Link
                    name=""
                    id=""
                    className="btn btn-primary mb-3"
                    role="button"
                >
                    <h3>{this.props.lesson}</h3>
                    <h2>{this.props.example}</h2>
                    <i className="fa-solid fa-lock" />
                </Link>
            </div>
        );
    }
}

export default AlphabetLook;