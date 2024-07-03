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
import debounce from 'lodash.debounce';

class ManagerUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            searchUser:''
        }
        this.debounceManagerUser = debounce(this.props.managerUserShow, 300)
    }

    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.admin.managerUserData === null) {
            this.props.managerUserShow(this.state.currentPage,this.state.searchUser);
        }
    }

    componentDidUpdate(prevState) {
        var iconBar = document.querySelector('.fa-bars');
        var menu = document.querySelector('.menuAll')
        iconBar.onclick = function () {
            menu.classList.toggle('hiddenMenu');
        }
        if (prevState.currentPage !== this.state.currentPage || prevState.searchUser !== this.state.searchUser) {
            this.debounceManagerUser(this.state.currentPage,this.state.searchUser);
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    managerUser = () => {
        if (this.props.admin.managerUserData !== null) {
            return this.props.admin.managerUserData.map((value, key) => {
                return <TableManagerUser stt={key} fullname={value.fullname} email={value.email} role_name={value.role_name} />
            })
        }
    }

    clickPrevious = () => {
        this.setState((prevState) => ({
            currentPage: Math.max(prevState.currentPage - 1, 1)
        }));
    }
    clickNext = () => {
        this.setState((prevState) => ({
            currentPage: prevState.currentPage + 1
        }));
    }

    clickNumberPage = (page) => {
        this.setState({
            currentPage: page
        });
    }

    isChange = (event) => {
        this.setState({
            searchUser: event.target.value,
            currentPage:1
        });
    }

    clickSearch = () => {
        this.setState({
            currentPage: 1
        },() => {
            this.props.managerUserShow(this.state.currentPage,this.state.searchUser);
        });
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
                                <div className="managerUser">
                                    <h2 className="tittle">Quản lý người dùng</h2>
                                    <div className="searchAndActiveMember">
                                        <Search searchUser = {this.state.searchUser} isChange = {(event) => {this.isChange(event)}} clickSearch = {this.clickSearch}/>
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
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="col-xl-1" scope="col">
                                                            STT
                                                        </th>
                                                        <th className="col-xl-3" scope="col">
                                                            Họ và tên
                                                        </th>
                                                        <th className="col-xl-4" scope="col">
                                                            Email
                                                        </th>
                                                        <th className="col-xl-1" scope="col">
                                                            Vai trò
                                                        </th>
                                                        <th className="col-xl-3" scope="col">
                                                            Hoạt động
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.managerUser()}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* end table  */}
                                    <div className="navigation">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <button className="page-link" onClick={this.clickPrevious} disabled={this.state.currentPage === 1}>
                                                        Previous
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link" onClick={() => this.clickNumberPage(1)}>
                                                        1
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link" onClick={() => this.clickNumberPage(2)}>
                                                        2
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link" onClick={() => this.clickNumberPage(3)}>
                                                        3
                                                    </button>
                                                </li>
                                                <li className="page-item">
                                                    <button className="page-link" onClick={this.clickNext}>
                                                        Next
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* end navigation */}
                                </div>
                                {/* end manageruser  */}
                                <ModelEditUser />
                                <ModelInfoUser />
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