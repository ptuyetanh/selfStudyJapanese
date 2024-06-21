import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlphabetMember extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <Link to = {this.props.linkto}
                    className="btn btn-primary mb-3"
                >
                    <h3>{this.props.lesson}</h3>
                    <h2>{this.props.example}</h2>
                </Link>
            </div>
        );
    }
}

export default AlphabetMember;