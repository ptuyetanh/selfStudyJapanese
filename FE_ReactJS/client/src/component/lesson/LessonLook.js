import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LessonLook extends Component {
    render() {
        return (
            <div className="col-10">
                <div className="d-grid gap-2 mb-3">
                    <Link name="" id="" className="btn btn-primary">
                        <h2>{this.props.lesson}</h2>
                        <i className="fa-solid fa-lock" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default LessonLook;