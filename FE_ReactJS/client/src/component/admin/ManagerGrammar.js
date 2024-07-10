import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate, Link } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';
import TableManagerGrammar from './component/TableManagerGrammar';
import ModelAddCourse from './component/ModelAddCourse';
import { addCourseGrammar, deleteGrammar, managerGrammarShow } from '../react-redux/actions/adminAction';
import debounce from 'lodash.debounce';
import AlertSuccess from '../alerts/AlertSuccess';
import { alertSOnSuccess } from '../react-redux/actions/alertAction';
import AlertSuccess2 from '../alerts/AlertSuccess2';
import ModelInfoGrammar from './component/ModelInfoGrammar';

class ManagerGrammar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            file_csv: '',
            error_file_csv: '',
            name:'',
            sound:'',
            mean_example:'',
            explain:'',
        }
        this.debounceManagerGrammar = debounce(this.props.managerGrammarShow, 300)
    }
    

    componentDidMount() {
        this.props.isAuthUser();
        if(this.props.admin.managerGrammarData === null){
            this.props.managerGrammarShow(this.state.currentPage)
        }
    }

    componentDidUpdate(prevState) {
        var iconBar = document.querySelector('.fa-bars');
        var menu = document.querySelector('.menuAll')
        iconBar.onclick = function () {
            menu.classList.toggle('hiddenMenu');
        }
        if (prevState.currentPage !== this.state.currentPage) {
            this.debounceManagerGrammar(this.state.currentPage);
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    tableManagerGrammar = () => {
        if (this.props.admin.managerGrammarData !== null) {
            return this.props.admin.managerGrammarData.map(value => {
                return (
                    <TableManagerGrammar key={value.grammar_id} stt = {value.grammar_id} name = {value.name} mean = {value.mean} example = {value.example} lesson_name = {value.lesson_name} level_name = {value.level_name} clickIconDelete = {() => this.clickIconDelete(value.grammar_id)} clickIconInfo = {() => this.clickIconInfo(value)}/>
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

    clickSaveGrammar = () => {
        const formData = new FormData();
        formData.append('file_csv', this.state.file_csv);
        console.log(formData);
        this.props.addCourseGrammar(formData);
        this.props.alertSOnSuccess();
    }

    clickIconDelete = (grammar_id) => {
        this.props.deleteGrammar(grammar_id)
    }

    clickIconInfo = (grammar) => {
        this.setState({
            name:grammar.name,
            sound:grammar.sound,
            mean_example:grammar.mean_example,
            explain:grammar.explain,
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
                                    <h2 className="tittle">Quản lý ngữ pháp</h2>
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
                                            <ModelAddCourse tittle = "Thêm ngữ pháp" fileExcel = {'https://docs.google.com/spreadsheets/d/1Y0SlrorQR2SD4bThOq-9ChoeCXIxsooW/edit?usp=sharing&ouid=108413886499755650261&rtpof=true&sd=true'} onChange = {(event) => this.isChange(event)} error_file_csv = {this.state.error_file_csv} file_csv = {this.state.file_csv} clickSave = {this.clickSaveGrammar}/>
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
                                                    {this.tableManagerGrammar()}
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
                                <ModelInfoGrammar name = {this.state.name} sound = {this.state.sound} mean_example = {this.state.mean_example} explain = {this.state.explain}/>
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
    managerGrammarShow,
    addCourseGrammar,
    alertSOnSuccess,
    deleteGrammar
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerGrammar);