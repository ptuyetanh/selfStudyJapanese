import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class MenuHome extends Component {
    infoUser_Click = () => {
        //show and hidden info
        var infoUser = document.querySelector('.info_user');
        var infoDetails = document.querySelector('.info_details');
        // console.log(infoDetails);
        infoUser.onclick = function () {
            // console.log("đã click");
            infoDetails.classList.toggle('hidden_info');
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-xl fixed-top justify-content-center">
                <div className="container-fluid">
                    <Link to='/home' className="logo">
                        <img
                            src="/assets/image/logo.svg"
                            className="img-fluid rounded-top icon_logo"
                            alt=""
                        />
                    </Link>
                    <ul className="navbar-nav">
                        <NavLink to="/seeVocabUser" className="nav-link">
                            <img
                                src="/assets/image/icon_tv.svg"
                                className="img-fluid rounded-top icon_tv"
                                alt=""
                            />
                        </NavLink>
                        <NavLink to='/seeGrammarUser' className="nav-link">
                            <img
                                src="/assets/image/icon_np.svg"
                                className="img-fluid rounded-top icon-np"
                                alt=""
                            />
                        </NavLink>
                        <NavLink to='/home' className="nav-link">
                            <img
                                src="/assets/image/icon_ot.svg"
                                className="img-fluid rounded-top icon_ot"
                                alt=""
                            />
                        </NavLink>
                        <NavLink to="/seeAlphabetUser" className="nav-link">
                            <img
                                src="/assets/image/icon_bcc.svg"
                                className="img-fluid rounded-top icon_bcc"
                                alt=""
                            />
                        </NavLink>
                        <NavLink to='/seeCommunicationUser' className="nav-link">
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
                        <div className="sign_up_member">
                            <img
                                src="/assets/image/member_svgrepo.com.svg"
                                className="img-fluid rounded-top member_svg"
                                alt=""
                            />
                            <h5>Đăng ký thành viên</h5>
                        </div>
                        {/* end sign_up_member */}
                        <div className="info_user" onClick={() => this.infoUser_Click()}>
                            <img
                                src="/assets/image/user-icon-svgrepo-com.svg"
                                className="img-fluid user_svg"
                                alt=""
                            />
                            <div className="name_user">
                                <h5>{this.props.fullname}</h5>
                                <i className="fa-solid fa-caret-down" />
                            </div>
                        </div>
                        <ul className="list-group list-group-numbered info_details hidden_info">
                            <li className="list-group-item1">Thông tin cá nhân</li>
                            <li className="list-group-item2" onClick={this.props.logout}>Đăng xuất</li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MenuHome;