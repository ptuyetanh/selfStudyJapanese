import React, { Component } from 'react';
import MenuIndex from './MenuIndex';

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

    render() {
        return (
            <div className='All'>
                <MenuIndex />
                <main>
                    <div className="content">
                        <form className="form_logIn">
                            <div className="col-8">
                                <h3>Đăng nhập vào Yuki</h3>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name=""
                                        aria-describedby="helpId"
                                        placeholder="Email"
                                    />
                                    <small id="helpId" className="form-text" />
                                </div>
                                <div className="mb-4 pass">
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
                                {/* <a
                                        name=""
                                        className="btn btn-primary btn_logIn"
                                        href="./home.html"
                                        role="button"
                                    >
                                        Đăng nhập
                                    </a> */}
                                <button type="reset" class="btn btn-primary btn_logIn" disabled>
                                    Đăng nhập
                                </button>
                                <div className="mt-4">
                                    <h5>
                                        Nếu bạn chưa có tài khoản thì hãy
                                        <a href="./signUp.html">Đăng ký</a>
                                    </h5>
                                </div>
                            </div>
                        </form>
                        {/* end form  */}
                    </div>
                    {/* end content  */}
                </main>
                {/* end Main */}
            </div>
        );
    }
}

export default LogIn;