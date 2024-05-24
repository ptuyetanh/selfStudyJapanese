import React, { Component } from 'react';
import MenuIndex from './MenuIndex';

class SignUp extends Component {
    render() {
        return (
            <div className='All'>
                <MenuIndex />
                <main>
                    <div className="content">
                        <form className="form_sign-up">
                            <div className="col-8">
                                <h3>Đăng kí tài khoản</h3>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name=""
                                        className="form-control"
                                        placeholder="Họ và tên"
                                        aria-describedby="helpId"
                                    />
                                    <small id="helpId" className="form-text" />
                                </div>
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
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name=""
                                        className="form-control"
                                        placeholder="Số điện thoại"
                                        aria-describedby="helpId"
                                    />
                                    <small id="helpId" className="form-text" />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name=""
                                        aria-describedby="helpId"
                                        placeholder=""
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
                                <button
                                    type="reset"
                                    className="btn btn-primary btn_sign_up"
                                    disabled=""
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                        {/* end form  */}
                    </div>
                    {/* end content  */}
                </main>
            </div>
        );
    }
}

export default SignUp;