import React, { Component } from 'react';
import MenuMember from './MenuMember';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import Search from '../review/Search';
import RowTableManager from '../review/RowTableManager';
import { Navigate } from 'react-router-dom';
import { learnedWords } from '../react-redux/actions/reviewAction';
import debounce from 'lodash.debounce'
class ManagerLearnedWords extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            searchWord: ''
        }
        this.debouncelearnedWords = debounce(this.props.learnedWords, 300)
    }

    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.review.learnedWordsData === null) {
            this.props.learnedWords(this.state.currentPage, this.state.searchWord);
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.currentPage !== this.state.currentPage || prevState.searchWord !== this.state.searchWord) {
            this.debouncelearnedWords(this.state.currentPage, this.state.searchWord);
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

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    showContentTable = (user_id) => {
        if (this.props.review.learnedWordsData !== null) {
            const findlearnedWords = this.props.review.learnedWordsData.filter(value => value.user_id === user_id);
            console.log(findlearnedWords);
            return findlearnedWords.map((value, key) => {
                return (
                    <RowTableManager STT={key} name={value.name} mean={value.mean} vocab_id={value.vocab_id} grammar_id={value.grammar_id} />
                )
            })
        }
    }

    isChange = (event) => {
        this.setState({
            searchWord: event.target.value,
            currentPage:1
        });
    }

    clickSearch = () => {
        this.setState({
            currentPage: 1
        },() => {
            this.props.learnedWords(this.state.currentPage, this.state.searchWord);
        });
    }

    render() {
        const { user } = this.props.auth;
        const { isNavigateLogOut } = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <main>
                <MenuMember fullname={user.fullname} logout={this.logOutButton} />
                <div className="content">
                    <div className="managerLearnedWords">
                        <h2 className="tittle">Quản lý từ đã học</h2>
                        <Search isChange = {(event) => {this.isChange(event)}} clickSearch = {this.clickSearch}/>
                        {/* end search  */}
                        <div className="tableManager container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="col-xl-1" scope="col">
                                            STT
                                        </th>
                                        <th className="col-xl-4" scope="col">
                                            Tên
                                        </th>
                                        <th className="col-xl-5" scope="col">
                                            Ý nghĩa
                                        </th>
                                        <th className="col-xl-2" scope="col">
                                            Khóa học
                                        </th>
                                    </tr>
                                </thead>
                                {this.showContentTable(user.user_id)}
                            </table>
                        </div>
                        {/* end table */}
                        <div className="navigation container">
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
                        {/* end navigation  */}
                    </div>
                </div>
            </main>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        logOut: state.logOut,
        review: state.review
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    learnedWords
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerLearnedWords);