import React, { Component } from 'react';

class ViewAndWrite extends Component {
    render() {
        return (
            <div className="viewAndWrite">
                <h2>Xem và viết đáp án</h2>
                <div className="viewVocab">Học sinh</div>
                <div className="writeVocab">
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Nhập tên hoặc cách đọc"
                    />
                </div>
                <button name="" id="" className="btn btn-primary check">
                    kiểm tra
                </button>
            </div>
        );
    }
}

export default ViewAndWrite;