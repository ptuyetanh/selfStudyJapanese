import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
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
            email: '',
            password: '',
            error_email: '',
            error_password: '',
        }
    }
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
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
        if (this.state.email !== '' && this.state.password !== '' && this.state.error_email === '' && this.state.error_password === '') {
            return (
                <button type="reset" className="btn btn-primary btn_logIn">
                    Đăng nhập
                </button>
            )
        } else {
            return (
                <button type="reset" className="btn btn-primary btn_logIn" disabled>
                    Đăng nhập
                </button>
            )
        }
    }

    render() {
        return (
            <main>
                <div className="content">
                    <form className="form_logIn">
                        <div className="col-8">
                            <h3>Đăng nhập vào Yuki</h3>
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
                            <div className="mt-4">
                                <h5>
                                    Nếu bạn chưa có tài khoản thì hãy 
                                    <Link to='/signup'>Đăng ký</Link>
                                </h5>
                            </div>
                        </div>
                    </form>
                    {/* end form  */}
                </div>
                {/* end content  */}
            </main>
        );
    }
}

export default LogIn;