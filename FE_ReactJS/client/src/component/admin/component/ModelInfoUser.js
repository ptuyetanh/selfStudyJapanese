import React, { Component } from 'react';

class ModelInfoUser extends Component {
    render() {
        return (
            <div className="modal" tabIndex={-1} id="userInfo">
                <div className="modal-dialog  modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin chi tiết</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>Họ và tên: Phạm Tuyết Anh</li>
                                <li>Số điện thoại: 0338456453</li>
                                <li>Ngày sinh: 04/11/2001</li>
                                <li>Ngày bắt đầu: 01/07/2024</li>
                                <li>Ngày hết hạn: 04/07/2024</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ModelInfoUser;