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
                <h4 className='loadError'>Vui lòng click 
                    <Link to="/login"> Đăng nhập </Link>
                    để tham gia học
                </h4>
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