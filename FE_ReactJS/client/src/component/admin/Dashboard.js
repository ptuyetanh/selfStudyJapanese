import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';
import ContentCount from './component/ContentCount';
import NewUser from './component/NewUser';
import NewSignUPMembers from './component/NewSignUPMembers';

class Dashboard extends Component {
    componentDidMount() {
        this.props.isAuthUser();
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    render() {
        const { user } = this.props.auth;
        const { isNavigateLogOut } = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <div className="admin">
                <NavbarAdmin fullname={user.fullname} logout={this.logOutButton} />
                <main>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-6 col-sm-3 col-md-3 col-xl-3 menuAll">
                                <MenuAdmin />
                            </div>
                            {/* end menuAll  */}
                            <div className="col">
                                <div className="contentAll">
                                    <div className="contentCount">
                                        <ContentCount />
                                        <ContentCount />
                                        <ContentCount />
                                        <ContentCount />
                                        <ContentCount />
                                        <ContentCount />
                                    </div>
                                    {/* end contentCount */}
                                    <div className="contentNew">
                                        <NewUser />
                                        {/* end newUser */}
                                        <div className="newSignUPMembers">
                                            <h3>Đăng ký thành viên mới</h3>
                                            <ul>
                                                <NewSignUPMembers />
                                                <NewSignUPMembers />
                                                <NewSignUPMembers />
                                                <NewSignUPMembers />
                                                <NewSignUPMembers />
                                            </ul>
                                        </div>
                                        {/* end newSignUPMembers */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
