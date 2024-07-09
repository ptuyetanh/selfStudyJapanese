import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate, Link } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';

class ManagerCourse extends Component {

    componentDidMount() {
        this.props.isAuthUser();
    }

    componentDidUpdate(prevState) {
        var iconBar = document.querySelector('.fa-bars');
        var menu = document.querySelector('.menuAll')
        iconBar.onclick = function () {
            menu.classList.toggle('hiddenMenu');
        }
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
            <div className="admin" style={{ height: "100%", overflowY: "hidden" }}>
                <NavbarAdmin fullname={user.fullname} logout={this.logOutButton} />
                <main style={{ height: "100%", overflowY: "hidden" }}>
                    <div className="container-fluid" style={{ height: "100%", overflowY: "hidden" }}>
                        <div className="row" style={{ height: "100%", overflowY: "hidden" }}>
                            <div className="col-xs-6 col-sm-3 col-md-3 col-xl-3 menuAll">
                                <MenuAdmin />
                            </div>
                            {/* end menuAll  */}
                            <div className="col">
                                <div className="managerCourse">
                                    <h2 className="tittle">Quản lý khóa học</h2>
                                    <div className="courseAll">
                                        <Link to = '/managercourse/managerAlphabet'>Bảng chữ cái</Link>
                                        <Link to = '/managercourse/managerVocab'>Từ vựng</Link>
                                        <Link >Ngữ pháp</Link>
                                        <Link >Giao tiếp</Link>
                                    </div>
                                </div>
                                {/* end managerCourse */}
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
        logOut: state.logOut,
        admin: state.admin
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerCourse);