import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ALessonContent extends Component {
    render() {
        return (
            <Link to= {this.props.linkTo} name="" id="" className="btn btn-primary" role="button">
                <h3>{this.props.nameContent}</h3>
                <h4>Tiến hành học</h4>
            </Link>

        );
    }
}

export default ALessonContent;