import React, { Component } from 'react';

class LessonFree extends Component {
    render() {
        return (
            <div className="col-10">
                <div className="d-grid gap-2 mb-3">
                    <button type="button" name="" id="" className="btn btn-primary">
                        <h2>1.</h2>
                        <h2>{this.props.lesson}</h2>
                        <h3>Học thử miễn phí</h3>
                    </button>
                </div>
            </div>
        );
    }
}

export default LessonFree;