import React, { Component } from 'react';
import moment from 'moment';
class ModelEditUser extends Component {

    clickIconEye = () => {
        var pass = document.getElementById('input_pass');
        var icon_eye = document.querySelector('.fa-eye');
        var icon_eye_slash = document.querySelector('.fa-eye-slash');
        icon_eye.onclick = function () {
            var type_pass_show = pass.getAttribute('type');
            if (type_pass_show) {
                pass.setAttribute('type', 'text');
                icon_eye_slash.classList.remove('hidden');
                this.classList.toggle('hidden_eye');
            }
        }
    }

    clickIconEyeSlash = () => {
        var pass = document.getElementById('input_pass');
        var icon_eye = document.querySelector('.fa-eye');
        var icon_eye_slash = document.querySelector('.fa-eye-slash');
        icon_eye_slash.onclick = function () {
            var type_pass_hiddens = pass.getAttribute('type');
            if (type_pass_hiddens) {
                pass.setAttribute('type', 'password')
                this.classList.toggle('hidden');
                icon_eye.classList.remove('hidden_eye');
            }
        }
    }

    showButtonDisableOrNODisable = () => {
        if (this.props.fullname === '' || this.props.email === '' || this.props.phonenumber === '' || this.props.password === '' || this.props.dateofbirth === '') {
            return (
                <button type="button" className="btn btn-primary" disabled>
                    Sửa
                </button>
            );
        } else {
            return (
                <button type="button" className="btn btn-primary" onClick={this.props.clickEditUser}>
                    Sửa
                </button>
            )
        }
    }

    render() {
        const dateofbirth = this.props.dateofbirth;
        const dateofbirthVN = moment(dateofbirth).utcOffset(7).format('YYYY-MM-DD')
        return (
            <div className="modal" tabIndex={-1} id="userEdit">
                <div className="modal-dialog  modal-md modal-dialog-centered">
                    {
                        this.props.user_id &&  (
                            <form className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Sửa người dùng</h5>
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
                                            onChange={this.props.onChange}
                                        />
                                        <small id="helpId" className="form-text">{this.props.error_fullname}</small>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id=""
                                            value={this.props.email}
                                            aria-describedby="helpId"
                                            placeholder="Email"
                                            onChange={this.props.onChange}
                                        />
                                        <small id="helpId" className="form-text">{this.props.error_email}</small>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            type="text"
                                            name="phonenumber"
                                            id=""
                                            value={this.props.phonenumber}
                                            className="form-control"
                                            placeholder="Số điện thoại"
                                            aria-describedby="helpId"
                                            onChange={this.props.onChange}
                                        />
                                        <small id="helpId" className="form-text">{this.props.error_phonenumber}</small>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="dateofbirth"
                                            id=""
                                            value={dateofbirthVN}
                                            aria-describedby="helpId"
                                            placeholder="dateofbirth"
                                            onChange={this.props.onChange}
                                        />
                                        <small id="helpId" className="form-text">{this.props.error_dateofbirth}</small>
                                    </div>
                                    <div className="mb-2 pass">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="input_pass"
                                            value={this.props.password}
                                            aria-describedby="helpId"
                                            placeholder="Mật khẩu"
                                            onChange={this.props.onChange}
                                            readOnly
                                        />
                                        <i className="fa-solid fa-eye" onClick={() => this.clickIconEye()} />
                                        <i className="fa-solid fa-eye-slash hidden" onClick={() => this.clickIconEyeSlash()} />
                                        <small id="helpId" className="form-text">{this.props.error_password}</small>
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select form-select-lg" name="role_id" id="" onChange={this.props.onChange} value={this.props.role_id}>
                                            <option >Chọn vai trò</option>
                                            <option value="1">User</option>
                                            <option value="2">Member</option>
                                            <option value="3">Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    {this.showButtonDisableOrNODisable()}
                                </div>
                            </form>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default ModelEditUser;