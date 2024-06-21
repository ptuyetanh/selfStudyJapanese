import React, { Component } from 'react';
import MenuHome from './MenuHome';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';
import { signUpMemberUser } from '../react-redux/actions/signUpMemberAction';
import AlertSuccess from '../alerts/AlertSuccess';
import AlertDanger from '../alerts/AlertDanger';

class SignUpMember extends Component {

    componentDidMount() {
        this.props.isAuthUser();
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    constructor(props) {
        const { user } = props.auth;
        super(props);
        this.state = {
            timestudy: '3 tháng',
            paymentphoto: '',
            user_id: user.user_id,
            error_paymentphoto: '',
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    isChangeFile = (event) => {
        const name = event.target.name;
        const filename = event.target.files[0].name;
        const file = event.target.files[0];
        // console.log(filename);
        this.setState({
            paymentphoto: file
        });
        //kiểm tra file
        if (name === 'paymentphoto') {
            const regExFile = /^.*\.(jpg|jpeg|png)$/;
            if (!regExFile.test(filename)) {
                this.setState({
                    error_paymentphoto: 'Định dạng ảnh là JPG,JPEG,PNG'
                });
            } else {
                this.setState({
                    error_paymentphoto: ''
                });
            }
        }
    }

    showButtonDisableOrNoDisable = () => {
        if (this.state.paymentphoto !== '' && this.state.error_paymentphoto === '') {
            return (
                <button type="button" className="btn btn-primary btn_sign_up" onClick={this.clickSignupMember}>
                    Đăng ký thành viên
                </button>
            )
        } else {
            return (
                <button type="button" className="btn btn-primary btn_sign_up" disabled>
                    Đăng ký thành viên
                </button>
            )
        }
    }

    clickSignupMember = () => {
        const { timestudy, paymentphoto, user_id } = this.state;
        console.log(this.state);
        const formData = new FormData();
        formData.append('timestudy', timestudy);
        formData.append('paymentphoto', paymentphoto);
        formData.append('user_id', user_id);
        console.log(formData);
        this.props.signUpMemberUser(formData);
    }

    render() {
        const { user } = this.props.auth;
        const { isNavigateLogOut } = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <main>
                <MenuHome fullname={user.fullname} logout={this.logOutButton} />
                <div className="content">
                    <AlertSuccess alertType = "success" alertContent = "Đăng ký thành công và dữ liệu đã được lưu lại và vui lòng chờ nhân viên xử lý"/>
                    <AlertDanger alertType = "danger" alertContent = "Người dùng đã gửi đăng ký thành viên, Vui lòng chờ nhân viên xử lý"/>
                    <form className="form_signup_member">
                        <div className="col-8">
                            <h3>Đăng kí tài khoản</h3>
                            <div className="mb-4">
                                <input
                                    value={user.fullname}
                                    type="text"
                                    className="form-control"
                                    placeholder="Họ và tên"
                                    aria-describedby="helpId"
                                    disabled
                                />
                                <small id="helpId" className="form-text" />
                            </div>
                            <div className="mb-3">
                                <input
                                    value={user.email}
                                    type="email"
                                    className="form-control"
                                    aria-describedby="helpId"
                                    placeholder="Email"
                                    disabled
                                />
                                <small id="helpId" className="form-text" />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="user_id"
                                    className="form-control"
                                    placeholder="id_user"
                                    style={{ display: "none" }}
                                    readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Thời gian học
                                </label>
                                <select className="form-select form-select-lg" name="timestudy" id="" onChange={(event) => this.isChange(event)}>
                                    <option value="3 tháng">3 tháng</option>
                                    <option value="6 tháng">6 tháng</option>
                                    <option value="1 năm">1 năm</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                    Nhập ảnh thanh toán
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="paymentphoto"
                                    id=""
                                    placeholder=""
                                    aria-describedby="helpId"
                                    onChange={(event) => this.isChangeFile(event)}
                                />
                                <small id="helpId" className="form-text">{this.state.error_paymentphoto}</small>
                            </div>
                            {/* Payment Guide */}
                            <div className="paymentGuide">
                                {/* Button trigger modal */}
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                >
                                    <i className="fa-solid fa-book-open" />
                                    Bản hướng dẫn thanh toán
                                </button>
                                {/* Modal */}
                                <div
                                    className="modal fade"
                                    id="staticBackdrop"
                                    data-bs-backdrop="static"
                                    data-bs-keyboard="false"
                                    tabIndex={-1}
                                    aria-labelledby="staticBackdropLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                                    Hướng dẫn thanh toán
                                                </h1>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                />
                                            </div>
                                            <div className="modal-body">
                                                <h3 className="guide">
                                                    B1: Thanh toán với 3 lựa chọn
                                                    <li>3 tháng: 100.000đ</li>
                                                    <li>6 tháng: 300.000đ</li>
                                                    <li>1 năm: 500.000đ</li>
                                                </h3>
                                                <h3 className="guide">
                                                    B2: Vui lòng quét mã QR hoăc nhập thông tin tài khoản để thanh
                                                    toán qua tài khoản ngân hàng
                                                </h3>
                                                <img
                                                    src="/assets/image/qr.jpg"
                                                    className="img-fluid rounded-top"
                                                    alt=""
                                                />
                                                <h3 className="guide">
                                                    B3: Sau khi thanh toán thành công chụp lại ảnh thanh toán rồi
                                                    nhập ảnh vào mục thanh toán thành viên
                                                </h3>
                                                <h3 className="guide">
                                                    Lưu ý: khi đăng ký chỉ được gửi 1 lần, gửi lần 2 sẽ không chấp
                                                    nhận mãu đăng ký
                                                </h3>
                                                <h3 className="guide">
                                                    Vui lòng liên hệ mail nếu muốn gửi lại form
                                                </h3>
                                                <h2 className="guide">Email: yukiainnstudy@gmail.com</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {this.showButtonDisableOrNoDisable()}
                        </div>
                    </form>
                    {/* end form  */}
                </div>
            </main>
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
    logOutUser,
    signUpMemberUser
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpMember);