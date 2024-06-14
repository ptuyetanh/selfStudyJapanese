import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LessonFree extends Component {
    render() {
        return (
            <div className="col-10">
                <div className="d-grid gap-2 mb-3">
                    <Link to={this.props.linkto} name="" id="" className="btn btn-primary">
                        <h2>{this.props.lesson}</h2>
                        <h3>Học thử miễn phí</h3>
                    </Link>
                </div>
            </div>
        );
    }
}

export default LessonFree;