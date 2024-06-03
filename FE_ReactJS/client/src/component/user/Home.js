import React, { Component } from 'react';
import MenuHome from './MenuHome';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';

class Home extends Component {
    
    componentDidMount() {
        this.props.isAuthUser();
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    render() {
        const {user} = this.props.auth;
        const {isNavigateLogOut} = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        else{
            return (
                <main>
                    <MenuHome fullname = {user.fullname} logout = {this.logOutButton}/>
                    <div className="content">
                        <div className="vocabulary">
                            <h3>
                                Hiện tại chưa có từ vựng để <br />
                                ôn tập
                            </h3>
                            <button type="button" className="btn btn-primary">
                                Từ vựng
                            </button>
                        </div>
                        <div className="grammar">
                            <h3>
                                Hiện tại chưa có ngữ pháp để <br /> ôn tập
                            </h3>
                            <button type="button" className="btn btn-primary">
                                Ngữ pháp
                            </button>
                        </div>
                    </div>
                </main>
            );
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        logOut: state.logOut
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)