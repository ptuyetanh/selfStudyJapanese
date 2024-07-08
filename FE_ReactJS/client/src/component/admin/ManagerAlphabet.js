import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate, Link } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';
import TableManagerAlphabet from './component/TableManagerAlphabet';
import ModelAddCourse from './component/ModelAddCourse';
import { addCourseAlphabet, deleteAlphabet, managerAlphabetShow } from '../react-redux/actions/adminAction';
import debounce from 'lodash.debounce';
import AlertSuccess from '../alerts/AlertSuccess';
import { alertSOnSuccess } from '../react-redux/actions/alertAction';
import AlertSuccess2 from '../alerts/AlertSuccess2';

class ManagerAlphabet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            file_csv: '',
            error_file_csv: ''
        }
        this.debounceManagerAlphabet = debounce(this.props.managerAlphabetShow, 300)
    }
    

    componentDidMount() {
        this.props.isAuthUser();
        if(this.props.admin.managerAlphabetData === null){
            this.props.managerAlphabetShow(this.state.currentPage)
        }
    }

    componentDidUpdate(prevState) {
        var iconBar = document.querySelector('.fa-bars');
        var menu = document.querySelector('.menuAll')
        iconBar.onclick = function () {
            menu.classList.toggle('hiddenMenu');
        }
        if (prevState.currentPage !== this.state.currentPage) {
            this.debounceManagerAlphabet(this.state.currentPage);
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    tableManagerAlphabet = () => {
        if (this.props.admin.managerAlphabetData !== null) {
            return this.props.admin.managerAlphabetData.map(value => {
                return (
                    <TableManagerAlphabet key={value.alphabet_id} stt = {value.alphabet_id} name = {value.name} pronunciation = {value.pronunciation} example = {value.example} sound = {value.sound} type = {value.type} lesson_name = {value.lesson_name} clickIconDelete = {() => this.clickIconDelete(value.alphabet_id)}/>
                )
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

    isChange = (event) => {
        const name = event.target.name;
        const filename = event.target.files[0].name;
        const file = event.target.files[0];
        this.setState({
            file_csv: file
        });
        //kiểm tra file
        if (name === 'file_csv') {
            const regExFile = /^.*\.(csv)$/;
            if (!regExFile.test(filename)) {
                this.setState({
                    error_file_csv: 'Định dạng file là csv'
                });
            } else {
                this.setState({
                    error_file_csv: ''
                });
            }
        }
    }

    clickSaveAlphabet = () => {
        const formData = new FormData();
        formData.append('file_csv', this.state.file_csv);
        console.log(formData);
        this.props.addCourseAlphabet(formData);
        this.props.alertSOnSuccess();
    }

    clickIconDelete = (alphabet_id) => {
        // console.log("Đã click" + alphabet_id);
        this.props.deleteAlphabet(alphabet_id)
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
                <AlertSuccess  alertContent = 'Thêm nội dung thành công'/>
                <AlertSuccess2  alertContent = 'Xóa thành công'/>
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
                                            <ModelAddCourse tittle = "Thêm bảng chữ cái" fileExcel = {'https://docs.google.com/spreadsheets/d/1K7i7y6k0G5-es9ycYguIgueMPF-4BHMe/edit?usp=sharing&ouid=108413886499755650261&rtpof=true&sd=true'} onChange = {(event) => this.isChange(event)} error_file_csv = {this.state.error_file_csv} file_csv = {this.state.file_csv} clickSaveAlphabet = {this.clickSaveAlphabet}/>
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
                                                    {this.tableManagerAlphabet()}
                                                    
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
    logOutUser,
    managerAlphabetShow,
    addCourseAlphabet,
    alertSOnSuccess,
    deleteAlphabet
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerAlphabet);