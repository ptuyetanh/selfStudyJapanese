import React, { Component } from 'react';

class ModelInfoGrammar extends Component {
    render() {
        return (
            <div className="modal" tabIndex={-1} id="grammarInfo">
                <div className="modal-dialog  modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Ngữ pháp chi tiết</h5>
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
                                <li>{'Ý nghĩa ví dụ: '+ this.props.mean_example}</li>
                                <li>{'Giải thích: ' + this.props.explain}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModelInfoGrammar;