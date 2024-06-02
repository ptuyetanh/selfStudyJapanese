import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

class RoutePrivate extends Component {
  
    render() {
        const {isauth} = this.props.auth;
        if (!isauth) {
            return <Navigate to="/login"/>
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