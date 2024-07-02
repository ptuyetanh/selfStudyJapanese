import React, { Component } from 'react';

class ModelEditUser extends Component {
    componentDidUpdate() {
        var pass = document.getElementById('input_pass');
        var icon_eye = document.querySelector('.fa-eye');
        var icon_eye_slash = document.querySelector('.fa-eye-slash');
        icon_eye.onclick = function () {
            var type_pass_show = pass.getAttribute('type');
            if (type_pass_show) {
                pass.setAttribute('type','text');
                icon_eye_slash.classList.remove('hidden');
                this.classList.toggle('hidden_eye');
            }
        }
        icon_eye_slash.onclick = function() {
            var type_pass_hiddens = pass.getAttribute('type');
            if (type_pass_hiddens) {
                pass.setAttribute('type','password')
                this.classList.toggle('hidden');
                icon_eye.classList.remove('hidden_eye');
            } 
        }
    }
    
    render() {
        return (
            <div className="modal" tabIndex={-1} id="userEdit">
                <div className="modal-dialog  modal-md modal-dialog-centered">
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
                                    name=""
                                    id=""
                                    className="form-control"
                                    placeholder="Họ và tên"
                                    aria-describedby="helpId"
                                />
                                <small id="helpId" className="form-text" />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder="Email"
                                />
                                <small id="helpId" className="form-text" />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="form-control"
                                    placeholder="Số điện thoại"
                                    aria-describedby="helpId"
                                />
                                <small id="helpId" className="form-text" />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="date"
                                    className="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder=""
                                />
                                <small id="helpId" className="form-text" />
                            </div>
                            <div className="mb-2 pass">
                                <input
                                    type="password"
                                    className="form-control"
                                    name=""
                                    id="input_pass"
                                    aria-describedby="helpId"
                                    placeholder="Mật khẩu"
                                />
                                <i className="fa-solid fa-eye" />
                                <i className="fa-solid fa-eye-slash hidden" />
                                <small id="helpId" className="form-text" />
                            </div>
                            <div className="mb-3">
                                <select className="form-select form-select-lg" name="" id="">
                                    <option >Chọn vai trò</option>
                                    <option value="">User</option>
                                    <option value="">Member</option>
                                    <option value="">Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">
                                Sửa
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ModelEditUser;