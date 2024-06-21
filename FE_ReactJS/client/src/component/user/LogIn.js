import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import MenuIndex from './MenuIndex';
import { connect } from 'react-redux';
import { logInUser } from '../react-redux/actions/logInAction';
import { isAuthUser } from '../react-redux/actions/authAction';
import AlertDanger from '../alerts/AlertDanger';

class LogIn extends Component {
    
    icon_eye_click = () => {
        var pass = document.getElementById('input_pass');
        var icon_eye = document.querySelector('.fa-eye');
        var icon_eye_slash = document.querySelector('.fa-eye-slash');
        var type_pass_show = pass.getAttribute('type');
        if (type_pass_show) {
            pass.setAttribute('type', 'text');
            icon_eye_slash.classList.remove('hidden');
            icon_eye.classList.add('hidden_eye');
        }
    }
    icon_eye_slash_click = () => {
        var pass = document.getElementById('input_pass');
        var icon_eye = document.querySelector('.fa-eye');
        var type_pass_hiddens = pass.getAttribute('type');
        var icon_eye_slash = document.querySelector('.fa-eye-slash');
        if (type_pass_hiddens) {
            pass.setAttribute('type', 'password')
            icon_eye_slash.classList.add('hidden');
            icon_eye.classList.remove('hidden_eye');
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error_email: '',
            error_password: ''
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
                <button type='submit' className="btn btn-primary btn_logIn" onClick={(event) => this.submitButton(event)}>
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
    submitButton = (event) => {
        event.preventDefault();
        const { email, password } = this.state
        this.props.logInUser(email, password);
    }
    render() {
        const { user, isauth } = this.props.auth;
        if (isauth && user.role_id === "1") {
            return (<Navigate to="/home" />);
        }else if (isauth && user.role_id === "2") {
            return (<Navigate to="/homeMember"/>)
        }
        return (
            <main>
                <MenuIndex />
                <div className="content">
                    <AlertDanger alertType='danger' alertContent='Đăng nhập không thành công do email  không tồn tại hoặc sai mật khẩu' />
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
                                <i className="fa-solid fa-eye" onClick={() => this.icon_eye_click()} />
                                <i className="fa-solid fa-eye-slash hidden" onClick={() => this.icon_eye_slash_click()} />
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
const mapStateToProps = (state, ownProps) => {
    return {
        logIn: state.logIn,
        auth: state.auth
    }
}
const mapDispatchToProps = {
    logInUser,
    isAuthUser
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);