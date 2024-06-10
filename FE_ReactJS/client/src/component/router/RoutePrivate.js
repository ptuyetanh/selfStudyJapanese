import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

class RoutePrivate extends Component {
    render() {
        const { loadingWeb } = this.props.auth;
        if (loadingWeb) {
            return (
            <div className='loading'>
                <img
                    src="/assets/image/logo.svg"
                    className="img-fluid rounded-top icon_logo_load"
                    alt=""
                />
                <h3> Loading Web</h3>
                <h3>Nếu loadding không chuyển hướng vui lòng  
                    <Link to="/login"> Đăng nhập lại</Link>
                </h3>
            </div>
            )
        }
        return (
            <Outlet />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(RoutePrivate)