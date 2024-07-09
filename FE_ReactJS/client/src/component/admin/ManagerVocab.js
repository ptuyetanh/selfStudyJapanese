import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate, Link } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';
import TableManagerVocab from './component/TableManagerVocab';
import ModelAddCourse from './component/ModelAddCourse';
import { addCourseVocab, deleteVocab, managerVocabShow } from '../react-redux/actions/adminAction';
import debounce from 'lodash.debounce';
import AlertSuccess from '../alerts/AlertSuccess';
import { alertSOnSuccess } from '../react-redux/actions/alertAction';
import AlertSuccess2 from '../alerts/AlertSuccess2';
import ModelInfoVocab from './component/ModelInfoVocab';

class ManagerVocab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            file_csv: '',
            error_file_csv: '',
            name:'',
            sound:'',
            sino_vietnamese_sound:'',
            pronunciation:'',
            example_mean:''
        }
        this.debounceManagerVocab = debounce(this.props.managerVocabShow, 300)
    }
    

    componentDidMount() {
        this.props.isAuthUser();
        if(this.props.admin.managerVocabData === null){
            this.props.managerVocabShow(this.state.currentPage)
        }
    }

    componentDidUpdate(prevState) {
        var iconBar = document.querySelector('.fa-bars');
        var menu = document.querySelector('.menuAll')
        iconBar.onclick = function () {
            menu.classList.toggle('hiddenMenu');
        }
        if (prevState.currentPage !== this.state.currentPage) {
            this.debounceManagerVocab(this.state.currentPage);
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    tableManagerVocab = () => {
        if (this.props.admin.managerVocabData !== null) {
            return this.props.admin.managerVocabData.map(value => {
                return (
                    <TableManagerVocab key={value.vocab_id} stt = {value.vocab_id} name = {value.name} mean = {value.mean} example = {value.example} lesson_name = {value.lesson_name} level_name = {value.level_name} clickIconDelete = {() => this.clickIconDelete(value.vocab_id)} clickIconInfo = {() => this.clickIconInfo(value)}/>
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

    clickSaveVocab = () => {
        const formData = new FormData();
        formData.append('file_csv', this.state.file_csv);
        console.log(formData);
        this.props.addCourseVocab(formData);
        this.props.alertSOnSuccess();
    }

    clickIconDelete = (vocab_id) => {
        this.props.deleteVocab(vocab_id)
    }

    clickIconInfo = (vocab) => {
        this.setState({
            name:vocab.name,
            sound:vocab.sound,
            sino_vietnamese_sound:vocab.sino_vietnamese_sound,
            pronunciation:vocab.pronunciation,
            example_mean:vocab.example_mean
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
                                            <ModelAddCourse tittle = "Thêm từ vựng" fileExcel = {'https://docs.google.com/spreadsheets/d/1-0uYp0UzdoZVztacHizRNOCZBcFum0np/edit?gid=490403579#gid=490403579'} onChange = {(event) => this.isChange(event)} error_file_csv = {this.state.error_file_csv} file_csv = {this.state.file_csv} clickSave = {this.clickSaveVocab}/>
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
                                                            Ý nghĩa
                                                        </th>
                                                        <th className="col-xl-3" scope="col">
                                                            Ví dụ
                                                        </th>
                                                        {/* <th className="col-xl-2" scope="col">
                                                            Âm thanh
                                                        </th> */}
                                                        <th className="col-xl-2" scope="col">
                                                            Bài học
                                                        </th>
                                                        <th className="col-xl-1" scope="col">
                                                            Cấp độ
                                                        </th>
                                                        <th className="col-xl-2" scope="col">
                                                            Hành động
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.tableManagerVocab()}
                                                    
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
                                <ModelInfoVocab name = {this.state.name} sound = {this.state.sound} sino_vietnamese_sound = {this.state.sino_vietnamese_sound} pronunciation = {this.state.pronunciation} example_mean = {this.state.example_mean}/>
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
    managerVocabShow,
    addCourseVocab,
    alertSOnSuccess,
    deleteVocab
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerVocab);