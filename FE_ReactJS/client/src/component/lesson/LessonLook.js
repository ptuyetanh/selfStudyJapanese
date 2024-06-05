import React, { Component } from 'react';

class LessonLook extends Component {
    render() {
        return (
            <div className="col-10">
                <div className="d-grid gap-2 mb-3">
                    <button type="button" name="" id="" className="btn btn-primary">
                        <h2>2. </h2>
                        <h2>{this.props.lesson}</h2>
                        <i className="fa-solid fa-lock" />
                    </button>
                </div>
            </div>
        );
    }
}

export default LessonLook;