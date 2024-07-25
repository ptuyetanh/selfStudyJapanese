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
import { deleteUser, editUser, managerUserShow } from '../react-redux/actions/adminAction';
import debounce from 'lodash.debounce';
import AlertSuccess from '../alerts/AlertSuccess';
import AlertDanger from '../alerts/AlertDanger';
import AlertSuccess2 from '../alerts/AlertSuccess2';

class ManagerUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            searchUser: '',
            fullname: '',
            email: '',
            phonenumber: '',
            dateofbirth: '',
            password: '',
            role_id: '',
            error_fullname: '',
            error_email: '',
            error_phonenumber: '',
            error_dateofbirth: '',
            error_password: '',
            user_id: null,
            start_day:'',
            expiration_date:''
        }
        this.debounceManagerUser = debounce(this.props.managerUserShow, 300)
    }

    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.admin.managerUserData === null) {
            this.props.managerUserShow(this.state.currentPage, this.state.searchUser);
        }
    }

    componentDidUpdate(prevState) {
        var iconBar = document.querySelector('.fa-bars');
        var menu = document.querySelector('.menuAll')
        iconBar.onclick = function () {
            menu.classList.toggle('hiddenMenu');
        }
        if (prevState.currentPage !== this.state.currentPage || prevState.searchUser !== this.state.searchUser) {
            this.debounceManagerUser(this.state.currentPage, this.state.searchUser);
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    //show user
    managerUser = () => {
        if (this.props.admin.managerUserData !== null) {
            return this.props.admin.managerUserData.map((value, key) => {
                return <TableManagerUser stt={value.user_id} fullname={value.fullname} email={value.email} role_name={value.role_name} clickIconEdit={() => this.clickIconEdit(value)} clickIconInfo={() => this.clickIconInfo(value)} clickIconDelete = {() => this.clickIconDelete(value.user_id,value.role_id)}/>
            })
        }
    }
    //pagination
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
    // search 
    isChange = (event) => {
        this.setState({
            searchUser: event.target.value,
            currentPage: 1
        });
    }

    clickSearch = () => {
        this.setState({
            currentPage: 1
        }, () => {
            this.props.managerUserShow(this.state.currentPage, this.state.searchUser);
        });
    }

    //edit user

    isChangeEdit = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
        //Kiểm tra fullname
        if (name === 'fullname') {
            if (value.trim() === '') {
                this.setState({
                    error_fullname: 'Vui lòng nhập nội dung'
                });
            } else {
                this.setState({
                    error_fullname: ''
                });
            }
        }
        //kiểm tra email
        if (name === 'email') {
            const regExEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if (value.trim() === '') {
                this.setState({
                    error_email: 'Vui lòng nhập nội dung'
                });
            } else if (!regExEmail.test(value)) {
                this.setState({
                    error_email: 'Email có dạng anything@gmail.com'
                });
            } else {
                this.setState({
                    error_email: ''
                });
            }
        }
        //kiểm tra sđt
        if (name === 'phonenumber') {
            const regExPNumber = /^(03|05|07|08|09)[0-9]{8}$/;
            if (value.trim() === '') {
                this.setState({
                    error_phonenumber: 'Vui lòng nhập nội dung'
                });
            } else if (!regExPNumber.test(value)) {
                this.setState({
                    error_phonenumber: 'Sai định dạng số điện thoại Việt Nam'
                });
            } else {
                this.setState({
                    error_phonenumber: ''
                });
            }
        }
        //kiểm tra ngày sinh
        if (name === 'dateofbirth') {
            if (value.trim() === '') {
                this.setState({
                    error_dateofbirth: 'Vui lòng nhập nội dung'
                });
            } else {
                this.setState({
                    error_dateofbirth: ''
                });
            }
        }
        //kiểm tra mật khẩu
        if (name === 'password') {
            const regExPass = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Z][a-zA-Z\d@$!%*?&]{7,}$/
            if (value.trim() === '') {
                this.setState({
                    error_password: 'Vui lòng nhập nội dung'
                });
            } else if (!regExPass.test(value)) {
                this.setState({
                    error_password: 'Mật khẩu phải chứa ít nhất 8 ký tự bao gồm 1 chữ cái hoa viết đầu,1 chữ cái thường,1 số và 1 ký tự đặc biệt'
                });
            } else {
                this.setState({
                    error_password: ''
                });
            }
        }
    }

    clickIconEdit = (user) => {
        this.setState({
            fullname: user.fullname,
            email: user.email,
            phonenumber: user.phonenumber,
            dateofbirth: user.dateofbirth,
            password: user.password,
            role_id: user.role_id,
            user_id: user.user_id
        });
    }
    clickEditUser = () => {
        const { fullname, email, phonenumber, dateofbirth, password, role_id, user_id } = this.state;
        const user = { fullname, email, phonenumber, dateofbirth, password, role_id };
        if (user_id) {
            this.props.editUser(user_id, user);
            this.setState({
                fullname: '',
                email: '',
                phonenumber: '',
                dateofbirth: '',
                password: '',
                role_id: '',
                user_id: null
            });
        }
    }

    clickIconDelete = (user_id,role_id) => {
        this.props.deleteUser(user_id, role_id);
    }

    clickIconInfo =(user) => {
        this.setState({
            fullname: user.fullname,
            phonenumber: user.phonenumber,
            dateofbirth: user.dateofbirth,
            start_day: user.start_day,
            expiration_date:user.expiration_date
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
                <AlertSuccess  alertContent = 'Sửa Thành công'/>
                <AlertDanger alertContent = 'Email hoặc số điện thoại đã tồn tại'/>
                <AlertSuccess2 alertContent = 'Xóa Thành công'/>
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
                                        <Search searchUser={this.state.searchUser} isChange={(event) => { this.isChange(event) }} clickSearch={this.clickSearch} />
                                        {/* end search */}
                                        <div className="activeMember">
                                            <Link to={'/manageruser/activeMembers'} name="" id="" className="btn btn-primary">
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
                                <ModelEditUser onChange={(event) => this.isChangeEdit(event)} error_fullname={this.state.error_fullname} error_email={this.state.error_email} error_phonenumber={this.state.error_phonenumber} error_dateofbirth={this.state.error_dateofbirth} error_password={this.state.error_password} user_id={this.state.user_id} fullname={this.state.fullname} email={this.state.email} phonenumber={this.state.phonenumber} dateofbirth={this.state.dateofbirth} password={this.state.password} role_id={this.state.role_id} clickEditUser={this.clickEditUser}/>
                                <ModelInfoUser fullname={this.state.fullname} phonenumber={this.state.phonenumber} dateofbirth={this.state.dateofbirth}
                                start_day= {this.state.start_day} expiration_date = {this.state.expiration_date}/>
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
    managerUserShow,
    editUser,
    deleteUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerUser);