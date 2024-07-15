import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate, Link } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';
import TableManagerCommunication from './component/TableManagerCommunication';
import ModelAddCourse from './component/ModelAddCourse';
import { addCourseCommunication, deleteCommunication, managerCommunicationShow } from '../react-redux/actions/adminAction';
import debounce from 'lodash.debounce';
import AlertSuccess from '../alerts/AlertSuccess';
import { alertSOnSuccess } from '../react-redux/actions/alertAction';
import AlertSuccess2 from '../alerts/AlertSuccess2';
import ModelInfoCommunication from './component/ModelInfoCommunication';

class ManagerCommunication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            file_csv: '',
            error_file_csv: '',
            one_a:'',
            one_b:'',
            two_a:'',
            two_b:'',
            three_a:'',
            three_b:'',
            four_a:'',
            four_b:'',
            five_a:'',
            five_b:''
        }
        this.debounceManagerCommunication = debounce(this.props.managerCommunicationShow, 300)
    }
    

    componentDidMount() {
        this.props.isAuthUser();
        if(this.props.admin.managerCommunicationData === null){
            this.props.managerCommunicationShow(this.state.currentPage)
        }
    }

    componentDidUpdate(prevState) {
        var iconBar = document.querySelector('.fa-bars');
        var menu = document.querySelector('.menuAll')
        iconBar.onclick = function () {
            menu.classList.toggle('hiddenMenu');
        }
        if (prevState.currentPage !== this.state.currentPage) {
            this.debounceManagerCommunication(this.state.currentPage);
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    tableManagerCommunication = () => {
        if (this.props.admin.managerCommunicationData !== null) {
            return this.props.admin.managerCommunicationData.map(value => {
                return (
                    <TableManagerCommunication key={value.communication_id} stt = {value.communication_id} lesson_name = {value.lesson_name} sound_shadowing = {value.sound_shadowing} mean_shadowing = {value.mean_shadowing}   clickIconDelete = {() => this.clickIconDelete(value.communication_id)} clickIconInfo = {() => this.clickIconInfo(value)}/>
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

    clickSaveCommunication = () => {
        const formData = new FormData();
        formData.append('file_csv', this.state.file_csv);
        console.log(formData);
        this.props.addCourseCommunication(formData);
        this.props.alertSOnSuccess();
    }

    clickIconDelete = (communication_id) => {
        this.props.deleteCommunication(communication_id)
    }

    clickIconInfo = (communication) => {
        this.setState({
            one_a:communication.one_a,
            one_b:communication.one_b,
            two_a:communication.two_a,
            two_b:communication.two_b,
            three_a:communication.three_a,
            three_b:communication.three_b,
            four_a:communication.four_a,
            four_b:communication.four_b,
            five_a:communication.five_a,
            five_b:communication.five_b
        });
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
                                    <h2 className="tittle">Quản lý giao tiếp</h2>
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
                                            <ModelAddCourse tittle = "Thêm giao tiếp" fileExcel = {'https://docs.google.com/spreadsheets/d/13wcyOVBLXc5qhfKLOXgUTeoi2FuR6Jlx/edit?gid=743534433#gid=743534433'} onChange = {(event) => this.isChange(event)} error_file_csv = {this.state.error_file_csv} file_csv = {this.state.file_csv} clickSave = {this.clickSaveCommunication}/>
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
                                                        <th className="col-xl-2" scope="col">
                                                            Tên bài học
                                                        </th>
                                                        <th className="col-xl-2" scope="col">
                                                            Âm thanh
                                                        </th>
                                                        <th className="col-xl-5" scope="col">
                                                            Ý nghĩa bài học
                                                        </th>
                                                        <th className="col-xl-2" scope="col">
                                                            Hành động
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.tableManagerCommunication()}
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
                                <ModelInfoCommunication one_a= {this.state.one_a} one_b = {this.state.one_b} two_a = {this.state.two_a} two_b={this.state.two_b} three_a = {this.state.three_a} three_b={this.state.three_b} four_a={this.state.four_a} four_b = {this.state.four_b} five_a={this.state.five_a} five_b={this.state.five_b}/>
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
    managerCommunicationShow,
    addCourseCommunication,
    alertSOnSuccess,
    deleteCommunication
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerCommunication)