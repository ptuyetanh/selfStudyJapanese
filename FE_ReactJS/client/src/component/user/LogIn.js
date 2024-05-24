import React, { Component } from 'react';
import MenuIndex from './MenuIndex';

class LogIn extends Component {
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