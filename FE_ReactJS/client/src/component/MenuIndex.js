import React, { Component } from 'react';

class MenuIndex extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-xl fixed-top justify-content-center">
                <div className="container-fluid">
                    <a className="logo" href="./index.html">
                        <img
                            src="./assets/image/logo.svg"
                            className="img-fluid rounded-top icon_logo"
                            alt=""
                        />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="./">
                                <img
                                    src="./assets/image/icon_từ_vựng.svg"
                                    className="img-fluid rounded-top icon_tv"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">
                                <img
                                    src="./assets/image/icon_ngữ_pháp.svg"
                                    className="img-fluid rounded-top icon-np"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="./index.html">
                                <img
                                    src="./assets/image/icon_ôn tập.svg"
                                    className="img-fluid rounded-top icon_ot"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">
                                <img
                                    src="./assets/image/icon_bảng_chữ_cái.svg"
                                    className="img-fluid rounded-top icon_bcc"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">
                                <img
                                    src="./assets/image/icon_giao_tiếp.svg"
                                    className="img-fluid rounded-top icon_gt"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                    <button
                        className="navbar-toggler d-xl-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <div className="btn-group two_sign">
                            <a
                                name=""
                                id=""
                                className="btn btn-primary sign_up"
                                href="./"
                                role="button"
                            >
                                Đăng ký
                            </a>
                            <a
                                name=""
                                id=""
                                className="btn btn-primary sign_in"
                                href="./"
                                role="button"
                            >
                                Đăng nhập
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MenuIndex;