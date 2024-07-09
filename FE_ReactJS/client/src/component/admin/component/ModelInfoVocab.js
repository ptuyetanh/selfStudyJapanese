import React, { Component } from 'react';

class ModelInfoVocab extends Component {
    render() {
        return (
            <div className="modal" tabIndex={-1} id="vocabInfo">
                <div className="modal-dialog  modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Từ vựng chi tiết</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>{'Tên: ' + this.props.name}</li>
                                <li>{'Âm thanh: ' + this.props.sound }</li>
                                <li>{'Âm hán việt: '+ this.props.sino_vietnamese_sound}</li>
                                <li>{'Cách đọc: ' + this.props.pronunciation}</li>
                                <li>{'Ý nghĩa ví dụ: ' + this.props.example_mean}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModelInfoVocab;