import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate, Link } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';
import Search from './component/Search';
import TableManagerUser from './component/TableManagerUser';
import ModelEditUser from './component/ModelEditUser';
import ModelInfoUser from './component/ModelInfoUser';
import { managerUserShow } from '../react-redux/actions/adminAction';

class ManagerUser extends Component {

    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.admin.managerUserData === null) {
            this.props.managerUserShow();
        }
    }

    componentDidUpdate(prevState) {
        var iconBar = document.querySelector('.fa-bars');
        var menu = document.querySelector('.menuAll')
        iconBar.onclick = function () {
            menu.classList.toggle('hiddenMenu');
        }
        if (prevState.currentPage !== this.state.currentPage) {
            this.debouncemanageruser(this.state.currentPage);
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
                                <div className="managerUser">
                                    <h2 className="tittle">Quản lý người dùng</h2>
                                    <div className="searchAndActiveMember">
                                        <Search />
                                        {/* end search */}
                                        <div className="activeMember">
                                            <Link name="" id="" className="btn btn-primary">
                                                Kích hoạt thành viên
                                            </Link>
                                        </div>
                                        {/* end activeMember  */}
                                    </div>
                                    {/* end searchAndActiveMember */}
                                    <div className="tableManagerUser">
                                        <div className="table-responsive-xl">
                                            {this.managerUser()}
                                        </div>
                                    </div>
                                    {/* end table  */}
                                    <div className="navigation">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <button className="page-link">
                                                        Previous
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link" >
                                                        1
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link">
                                                        2
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link">
                                                        3
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link">
                                                        Next
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* end navigation */}
                                </div>
                                {/* end manageruser  */}
                                <ModelEditUser/>
                                <ModelInfoUser/>
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
    logOutUser,
    managerUserShow
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerUser);