import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class MenuIndex extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-xl fixed-top justify-content-center">
                <div className="container-fluid">
                    <Link to='/' className="logo">
                        <img
                            src="/assets/image/logo.svg"
                            className="img-fluid rounded-top icon_logo"
                            alt=""
                        />
                    </Link>
                    <ul className="navbar-nav">
                        <NavLink to="/seeVocabulary" className="nav-link">
                            <img
                                src="/assets/image/icon_tv.svg"
                                className="img-fluid rounded-top icon_tv"
                                alt=""
                            />
                        </NavLink>
                        <NavLink to='/seeGrammar' className="nav-link">
                            <img
                                src="/assets/image/icon_np.svg"
                                className="img-fluid rounded-top icon-np"
                                alt=""
                            />
                        </NavLink>
                        <NavLink to='/' className="nav-link">
                            <img
                                src="/assets/image/icon_ot.svg"
                                className="img-fluid rounded-top icon_ot"
                                alt=""
                            />
                        </NavLink>
                        <NavLink to="/seeAlphabet" className="nav-link">
                            <img
                                src="/assets/image/icon_bcc.svg"
                                className="img-fluid rounded-top icon_bcc"
                                alt=""
                            />
                        </NavLink>
                        <NavLink to='/seeCommunication' className="nav-link">
                            <img
                                src="/assets/image/icon_gt2.svg"
                                className="img-fluid rounded-top icon_gt"
                                alt=""
                            />
                        </NavLink>
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
                            <NavLink to='/signup'
                                name=""
                                id=""
                                className="btn btn-primary sign_up"
                                role="button"
                            >
                                Đăng ký
                            </NavLink>
                            <NavLink to='/login'
                                name=""
                                id=""
                                className="btn btn-primary sign_in"
                                role="button"
                            >
                                Đăng nhập
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MenuIndex;