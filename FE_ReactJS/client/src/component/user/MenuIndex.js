import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuIndex extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-xl fixed-top justify-content-center">
                <div className="container-fluid">
                    <Link to='/' className="logo">
                        <img
                            src="./assets/image/logo.svg"
                            className="img-fluid rounded-top icon_logo"
                            alt=""
                        />
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/seeVocabulary" className="nav-link">
                                <img
                                    src="./assets/image/icon_từ_vựng.svg"
                                    className="img-fluid rounded-top icon_tv"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/seeGrammar' className="nav-link">
                                <img
                                    src="./assets/image/icon_ngữ_pháp.svg"
                                    className="img-fluid rounded-top icon-np"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">
                                <img
                                    src="./assets/image/icon_ôn tập.svg"
                                    className="img-fluid rounded-top icon_ot"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/seeAlphabet" className="nav-link">
                                <img
                                    src="./assets/image/icon_bảng_chữ_cái.svg"
                                    className="img-fluid rounded-top icon_bcc"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/seeCommunication' className="nav-link">
                                <img
                                    src="./assets/image/icon_giao_tiếp.svg"
                                    className="img-fluid rounded-top icon_gt"
                                    alt=""
                                />
                            </Link>
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
                            <Link to='/signup'
                                name=""
                                id=""
                                className="btn btn-primary sign_up"
                                role="button"
                            >
                                Đăng ký
                            </Link>
                            <Link to='/login'
                                name=""
                                id=""
                                className="btn btn-primary sign_in"
                                role="button"
                            >
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MenuIndex;