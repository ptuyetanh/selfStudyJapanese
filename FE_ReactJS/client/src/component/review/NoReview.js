import React, { Component } from 'react';

class NoReview extends Component {
    render() {
        return (
            <div className="content">
                <div className="vocabulary">
                    <h3>
                        Hiện tại chưa có từ vựng để <br />
                        ôn tập
                    </h3>
                    <button type="button" className="btn btn-primary">
                        Từ vựng
                    </button>
                </div>
                <div className="grammar">
                    <h3>
                        Hiện tại chưa có ngữ pháp để <br /> ôn tập
                    </h3>
                    <button type="button" className="btn btn-primary">
                        Ngữ pháp
                    </button>
                </div>
            </div>
        );
    }
}

export default NoReview;