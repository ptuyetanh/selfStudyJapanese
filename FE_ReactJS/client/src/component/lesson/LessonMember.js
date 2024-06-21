import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LessonMember extends Component {
    render() {
        return (
            <div className="col-10">
                <div className="d-grid gap-2 mb-3">
                    <Link to={this.props.linkto}  className="btn btn-primary">
                        <h2>{this.props.lesson}</h2>
                    </Link>
                </div>
            </div>
        );
    }
}

export default LessonMember;