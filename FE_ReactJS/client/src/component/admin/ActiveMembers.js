import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate, Link } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';
import TableActiveMember from './component/TableActiveMember';
import ModelActiveMember from './component/ModelActiveMember';
import ModelPaymentPhoto from './component/ModelPaymentPhoto';
import { activeMemberShow, refuseActiveMember, saveActiveMember } from '../react-redux/actions/adminAction';
import debounce from 'lodash.debounce';
import AlertSuccess from '../alerts/AlertSuccess';
import AlertSuccess2 from '../alerts/AlertSuccess2';

class ActiveMembers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            user_id:'',
            signupmember_id:'',
            paymentphoto:'',
            fullname:'',
            start_day:'',
            expiration_date:'',
            role_id:'',
            error_start_day:'',
            error_expiration_date:''
        }
        this.debounceActiveMember = debounce(this.props.activeMemberShow, 300)
    }
    

    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.admin.activeMemberData === null) {
            this.props.activeMemberShow(this.state.currentPage)
        }
    }

    componentDidUpdate(prevState) {
        var iconBar = document.querySelector('.fa-bars');
        var menu = document.querySelector('.menuAll')
        iconBar.onclick = function () {
            menu.classList.toggle('hiddenMenu');
        }
        if (prevState.currentPage !== this.state.currentPage) {
            this.debounceActiveMember(this.state.currentPage);
        }
    }

    //show active member
    activeMember = () => {
        if (this.props.admin.activeMemberData !== null) {
            return this.props.admin.activeMemberData.map((value, key) => {
                return <TableActiveMember stt={key} fullname={value.fullname} timestudy={value.timestudy} paymentphoto={value.paymentphoto} clickPaymentPhoto={() => this.clickPaymentPhoto(value.paymentphoto)} clickButtonActiveMember = {() => this.clickButtonActiveMember(value)} clickButtonRefuse = {() => this.clickButtonRefuse(value.signupmember_id)}/>
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

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }
    //PaymentPhoto
    clickPaymentPhoto = (paymentphoto) => {
        this.setState({
            paymentphoto: paymentphoto
        });
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        });
        //kiểm tra ngày bắt đầu
        if (name === 'start_day') {
            if (value.trim() === '') {
                this.setState({
                    error_start_day: 'Vui lòng nhập nội dung'
                });
            } else {
                this.setState({
                    error_start_day: ''
                });
            }
        }
        //kiểm tra ngày kết thúc
        if (name === 'expiration_date') {
            if (value.trim() === '') {
                this.setState({
                    error_expiration_date: 'Vui lòng nhập nội dung'
                });
            } else {
                this.setState({
                    error_expiration_date: ''
                });
            }
        }
    }
    //clickButtonActiveMember

    clickButtonActiveMember = (activeMember) => {
        this.setState({
            user_id:activeMember.user_id,
            signupmember_id:activeMember.signupmember_id,
            fullname:activeMember.fullname,
            role_id: activeMember.role_id,
            start_day: activeMember.start_day,
            expiration_date: activeMember.expiration_date
        });
    }

    clickSaveActiveMember = () => {
        const {user_id,signupmember_id,start_day,expiration_date,role_id} = this.state;
        const user = {start_day,expiration_date,role_id,signupmember_id};
        if (user_id) {
            this.props.saveActiveMember(user_id, user);
            this.setState({
                start_day: '',
                expiration_date: '',
                role_id: '',
                user_id: null,
                signupmember_id:''
            });
        }
    } 
    //refuse active member
    clickButtonRefuse = (signupmember_id) => {
        this.props.refuseActiveMember(signupmember_id)
    }

    render() {
        const { user } = this.props.auth;
        const { isNavigateLogOut } = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <div className="admin" style={{ height: "100%" }}>
                <NavbarAdmin fullname={user.fullname} logout={this.logOutButton} />
                <AlertSuccess alertContent = {"Kích hoạt " +this.state.fullname+ " thành công"}/>
                <AlertSuccess2 alertContent = {"Từ chối đơn đăng ký thành viên"}/>
                <main style={{ height: "100%" }}>
                    <div className="container-fluid" style={{ height: "100%" }}>
                        <div className="row" style={{ height: "100%" }}>
                            <div className="col-xs-6 col-sm-3 col-md-3 col-xl-3 menuAll">
                                <MenuAdmin />
                            </div>
                            {/* end menuAll  */}
                            <div className="col">
                                <div className="activeMembers">
                                    <h2 className="tittle">Kích hoạt thành viên</h2>
                                    <Link to = {'/manageruser'}>
                                        <i className="fa-solid fa-arrow-left-long"></i>
                                    </Link>
                                    <div className="tableActiveMember">
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
                                                        <th className="col-xl-2" scope="col">
                                                            Thời gian học
                                                        </th>
                                                        <th className="col-xl-3" scope="col">
                                                            Ảnh thanh toán
                                                        </th>
                                                        <th className="col-xl-3" scope="col">
                                                            Hoạt động
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.activeMember()}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* end table  */}
                                    <div className="navigation">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <button className="page-link" onClick={this.clickPrevious}>
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
                                    <ModelActiveMember onChange = {(event) => this.isChange(event)} error_start_day={this.state.error_start_day} error_expiration_date={this.state.error_expiration_date} fullname = {this.state.fullname} role_id = {this.state.role_id} start_day = {this.state.start_day} expiration_date = {this.state.expiration_date} 
                                    user_id = {this.state.user_id} signupmember_id = {this.state.signupmember_id}
                                    clickSaveActiveMember = {this.clickSaveActiveMember}/>
                                    <ModelPaymentPhoto paymentphoto = {this.state.paymentphoto} />
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
        logOut: state.logOut,
        admin: state.admin
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    activeMemberShow,
    saveActiveMember,
    refuseActiveMember
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveMembers);