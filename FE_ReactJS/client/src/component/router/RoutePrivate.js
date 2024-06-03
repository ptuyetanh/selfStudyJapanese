import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

class RoutePrivate extends Component {
    render() {
        const { isauth, loadingWeb } = this.props.auth;
        console.log(isauth);
        if (loadingWeb) {
            return (
            <div className='loading'>
                <img
                    src="/assets/image/logo.svg"
                    className="img-fluid rounded-top icon_logo_load"
                    alt=""
                />
                <h3> Loading Web</h3>
            </div>
            )
        }else if (!isauth) {
            return <Navigate to="/login" />
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