import React, { Component } from 'react';

class ModelActiveMember extends Component {

    showButtonDisableOrNoDisable = () => {
        if (this.props.start_day === null || this.props.expiration_date === null) {
            return (
                <button type="button" className="btn btn-primary" disabled>
                    Lưu
                </button>
            )
        } else {
            return (
                <button type="button" className="btn btn-primary" onClick={this.props.clickSaveActiveMember}>
                    Lưu
                </button>
            )
        }
    }

    render() {
        return (
            <div className="modal" tabIndex={-1} id="activeMember">
                <div className="modal-dialog  modal-md modal-dialog-centered">
                    {
                        this.props.user_id &&(
                            <form className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Kích hoạt</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <div className="mb-2">
                                        <input
                                            type="text"
                                            name="fullname"
                                            id=""
                                            value={this.props.fullname}
                                            className="form-control"
                                            placeholder="Họ và tên"
                                            aria-describedby="helpId"
                                            disabled
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Ngày bắt đầu</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="start_day"
                                            id=""
                                            aria-describedby="helpId"
                                            placeholder="dateofbirth"
                                            onChange={this.props.onChange}
                                        />
                                        <small id="helpId" className="form-text">{this.props.error_start_day}</small>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Ngày kết thúc</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="expiration_date"
                                            id=""
                                            aria-describedby="helpId"
                                            placeholder="dateofbirth"
                                            onChange={this.props.onChange}
                                        />
                                        <small id="helpId" className="form-text">{this.props.error_expiration_date}</small>
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select form-select-lg" name="role_id" id="" onChange={this.props.onChange} value={this.props.role_id}>
                                            <option >Chọn vai trò</option>
                                            <option value="1">User</option>
                                            <option value="2">Member</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    {this.showButtonDisableOrNoDisable()}
                                </div>
                            </form>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default ModelActiveMember;