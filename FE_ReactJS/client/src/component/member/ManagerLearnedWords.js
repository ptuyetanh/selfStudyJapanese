import React, { Component } from 'react';
import MenuMember from './MenuMember';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import Search from '../review/Search';
import RowTableManager from '../review/RowTableManager';
import Navigation from '../review/Navigation';
import { Navigate } from 'react-router-dom';
import { learnedWords } from '../react-redux/actions/reviewAction';

class ManagerLearnedWords extends Component {

    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.review.learnedWordsData === null) {
            this.props.learnedWords();
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    showContentTable = () => {
        if (this.props.review.learnedWordsData !== null) {
            if (this.props.review.searchWordsData === null) {
                return this.props.review.learnedWordsData.map((value, key) => {
                    return (
                        <RowTableManager STT={key} name={value.name} mean={value.mean} vocab_id={value.vocab_id} grammar_id={value.grammar_id} />
                    )
                })
            }else{
                const resultSearch = [];
                this.props.review.learnedWordsData.forEach(value => {
                    if (value.name.indexOf(this.props.review.searchWordsData) !== -1) {
                        resultSearch.push(value);
                    } else if (value.mean.indexOf(this.props.review.searchWordsData) !== -1) {
                        resultSearch.push(value);
                    }else if (this.props.review.searchWordsData === 'Từ vựng') {
                        resultSearch.push(value);
                    }else if (this.props.review.searchWordsData === 'Ngữ pháp') {
                        resultSearch.push(value);
                    }
                })
                return resultSearch.map((value, key) => {
                    return (
                        <RowTableManager STT={key} name={value.name} mean={value.mean} vocab_id={value.vocab_id} grammar_id={value.grammar_id} />
                    )
                })
            }
        }
    }

    render() {
        console.log(this.props.review.searchWordsData);
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
                        <Search />
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
                                {this.showContentTable()}
                            </table>
                        </div>
                        {/* end table */}
                        <Navigation />
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