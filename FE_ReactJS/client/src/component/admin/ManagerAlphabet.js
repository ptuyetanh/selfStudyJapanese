import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate, Link } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';
import TableManagerAlphabet from './component/TableManagerAlphabet';
import ModelAddCourse from './component/ModelAddCourse';

class ManagerAlphabet extends Component {

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
            <div className="admin" style={{ height: "100%"}}>
                <NavbarAdmin fullname={user.fullname} logout={this.logOutButton} />
                <main style={{ height: "100%" }}>
                    <div className="container-fluid" style={{ height: "100%" }}>
                        <div className="row" style={{ height: "100%" }}>
                            <div className="col-xs-6 col-sm-3 col-md-3 col-xl-3 menuAll">
                                <MenuAdmin />
                            </div>
                            {/* end menuAll  */}
                            <div className="col">
                                <div className="managerCourse">
                                    <h2 className="tittle">Quản lý khóa học</h2>
                                    <div className="backAndAddCoures">
                                        <Link to='/managercourse'>
                                            <i className="fa-solid fa-arrow-left-long"></i>
                                        </Link>
                                        {/* end back */}
                                        <div className="addCourse">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#addCourse"
                                            >
                                                <i className="fa-solid fa-circle-plus"></i>
                                                <p>Thêm</p>
                                            </button>
                                            <ModelAddCourse tittle = "Thêm bảng chữ cái" fileExcel = {'https://docs.google.com/spreadsheets/d/1K7i7y6k0G5-es9ycYguIgueMPF-4BHMe/edit?usp=sharing&ouid=108413886499755650261&rtpof=true&sd=true'}/>
                                        </div>
                                        {/* end addCourse  */}
                                    </div>
                                    {/* end backAndAddCoures */}
                                    <div className="tableManagerCourse">
                                        <div className="table-responsive-xl">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="col-xl-1" scope="col">
                                                            STT
                                                        </th>
                                                        <th className="col-xl-1" scope="col">
                                                            Tên
                                                        </th>
                                                        <th className="col-xl-2" scope="col">
                                                            Cách đọc
                                                        </th>
                                                        <th className="col-xl-2" scope="col">
                                                            Ví dụ
                                                        </th>
                                                        <th className="col-xl-2" scope="col">
                                                            Âm thanh
                                                        </th>
                                                        <th className="col-xl-1" scope="col">
                                                            Loại
                                                        </th>
                                                        <th className="col-xl-2" scope="col">
                                                            Bài học
                                                        </th>
                                                        <th className="col-xl-2" scope="col">

                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <TableManagerAlphabet />
                                                    <TableManagerAlphabet />
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* end table  */}
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
export default connect(mapStateToProps, mapDispatchToProps)(ManagerAlphabet);