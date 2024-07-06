import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MenuAdmin extends Component {
    render() {
        return (
            <div className="menu">
                <img
                    src="/assets/image/Logo_name.svg"
                    className="img-fluid rounded-top"
                    alt=""
                />
                <div className="borders" />
                <NavLink to ="/dashboard"className="btn btn-primary">
                    <i className="fa-solid fa-house" />
                    <h3>Dashboard</h3>
                </NavLink>
                <NavLink to = "/manageruser"  className="btn btn-primary">
                    <i className="fa-solid fa-users" />
                    <h3>Người dùng</h3>
                </NavLink>
                <NavLink to = "/managercourse" name="" id="" className="btn btn-primary">
                    <i className="fa-solid fa-book-open-reader" />
                    <h3>Khóa học</h3>
                </NavLink>
            </div>

        );
    }
}

export default MenuAdmin;