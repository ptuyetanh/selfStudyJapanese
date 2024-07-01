import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarAdmin extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-xl adminmenu">
                <i className="fa-solid fa-bars" />
                <div className="container">
                    <Link className="navbar-brand">
                        <img
                            src="./assets/image/logo.svg"
                            className="img-fluid rounded-top"
                            alt=""
                        />
                    </Link>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-user" />
                                    <h3>Admin</h3>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <Link className="dropdown-item">
                                        Thông tin admin
                                    </Link>
                                    <button className="dropdown-item" onClick={this.props.logout}>
                                        Đăng xuất
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default NavbarAdmin;