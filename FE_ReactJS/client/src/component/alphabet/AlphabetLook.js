import React, { Component } from 'react';

class AlphabetLook extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <a
                    name=""
                    id=""
                    href='/'
                    className="btn btn-primary mb-3"
                    role="button"
                >
                    <h3>{this.props.lesson}</h3>
                    <h2>{this.props.example}</h2>
                    <i className="fa-solid fa-lock" />
                </a>
            </div>
        );
    }
}

export default AlphabetLook;