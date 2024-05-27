import React, { Component } from 'react';

class SignUp extends Component {
    componentDidMount() {
        //pass eye and eye-slash
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
        icon_eye_slash.onclick = function () {
            var type_pass_hiddens = pass.getAttribute('type');
            if (type_pass_hiddens) {
                pass.setAttribute('type', 'password')
                this.classList.toggle('hidden');
                icon_eye.classList.remove('hidden_eye');
            }
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            phonenumber: '',
            dateofbirth: '',
            password: '',
            error_fullname: '',
            error_email: '',
            error_phonenumber: '',
            error_dateofbirth: '',
            error_password: '',
        }
    }
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
        //Kiểm tra fullname
        if (name === 'fullname') {
            if (value.trim() === '') {
                this.setState({
                    error_fullname: 'Vui lòng nhập nội dung'
                });
            } else {
                this.setState({
                    error_fullname: ''
                });
            }
        }
        //kiểm tra email
        if (name === 'email') {
            const regExEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if (value.trim() === '') {
                this.setState({
                    error_email: 'Vui lòng nhập nội dung'
                });
            } else if (!regExEmail.test(value)) {
                this.setState({
                    error_email: 'Email có dạng anything@gmail.com'
                });
            } else {
                this.setState({
                    error_email: ''
                });
            }
        }
        //kiểm tra sđt
        if (name === 'phonenumber') {
            const regExPNumber = /^(03|05|07|08|09)[0-9]{8}$/;
            if (value.trim() === '') {
                this.setState({
                    error_phonenumber: 'Vui lòng nhập nội dung'
                });
            } else if (!regExPNumber.test(value)) {
                this.setState({
                    error_phonenumber: 'Sai định dạng số điện thoại Việt Nam'
                });
            } else {
                this.setState({
                    error_phonenumber: ''
                });
            }
        }
        //kiểm tra ngày sinh
        if (name === 'dateofbirth') {
            if (value.trim() === '') {
                this.setState({
                    error_dateofbirth: 'Vui lòng nhập nội dung'
                });
            } else {
                this.setState({
                    error_dateofbirth: ''
                });
            }
        }
        //kiểm tra mật khẩu
        if (name === 'password') {
            const regExPass = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Z][a-zA-Z\d@$!%*?&]{7,}$/
            if (value.trim() === '') {
                this.setState({
                    error_password: 'Vui lòng nhập nội dung'
                });
            } else if (!regExPass.test(value)) {
                this.setState({
                    error_password: 'Mật khẩu phải chứa ít nhất 8 ký tự bao gồm 1 chữ cái hoa viết đầu,1 chữ cái thường,1 số và 1 ký tự đặc biệt'
                });
            } else {
                this.setState({
                    error_password: ''
                });
            }
        }
    }
    showButtonDisableOrNoDisable = () => {
        if (this.state.fullname !== '' && this.state.email !== '' && this.state.phonenumber !== '' && this.state.dateofbirth !== '' && this.state.password !== '' && this.state.error_email === '' && this.state.error_phonenumber === '' && this.state.error_password === '') {
            return (
                <button
                    type="reset"
                    className="btn btn-primary btn_sign_up"

                >
                    Đăng ký
                </button>
            )
        } else {
            return (
                <button
                    type="reset"
                    className="btn btn-primary btn_sign_up"
                    disabled
                >
                    Đăng ký
                </button>
            )
        }
    }
    render() {
        return (
            <main>
                <div className="content">
                    <form className="form_sign-up">
                        <div className="col-8">
                            <h3>Đăng kí tài khoản</h3>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="fullname"
                                    className="form-control"
                                    placeholder="Họ và tên"
                                    aria-describedby="helpId"
                                    onChange={(event) => this.isChange(event)}
                                />
                                <small id="helpId" className="form-text">{this.state.error_fullname}</small>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    aria-describedby="helpId"
                                    placeholder="Email"
                                    onChange={(event) => this.isChange(event)}
                                />
                                <small id="helpId" className="form-text">{this.state.error_email}</small>
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    name="phonenumber"
                                    className="form-control"
                                    placeholder="Số điện thoại"
                                    aria-describedby="helpId"
                                    onChange={(event) => this.isChange(event)}
                                />
                                <small id="helpId" className="form-text">{this.state.error_phonenumber}</small>
                            </div>
                            <div className="mb-4">
                                <label for="" className="form-label">Ngày sinh</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dateofbirth"
                                    aria-describedby="helpId"
                                    placeholder="Ngày sinh"
                                    onChange={(event) => this.isChange(event)}
                                />
                                <small id="helpId" className="form-text">{this.state.error_dateofbirth}</small>
                            </div>
                            <div className="mb-4 pass">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="input_pass"
                                    aria-describedby="helpId"
                                    placeholder="Mật khẩu"
                                    onChange={(event) => this.isChange(event)}
                                />
                                <i className="fa-solid fa-eye" />
                                <i className="fa-solid fa-eye-slash hidden" />
                                <small id="helpId" className="form-text">{this.state.error_password}</small>
                            </div>
                            {this.showButtonDisableOrNoDisable()}
                        </div>
                    </form>
                    {/* end form  */}
                </div>
                {/* end content  */}
            </main>
        );
    }
}

export default SignUp;