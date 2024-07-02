import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';
import NavbarAdmin from './component/NavbarAdmin';
import MenuAdmin from './component/MenuAdmin';
import ContentCount from './component/ContentCount';
import NewUser from './component/NewUser';
import NewSignUPMembers from './component/NewSignUPMembers';
import { countAlphabetShow, countCommunicationShow, countGrammarShow, countMemberShow, countUserShow, countVocabShow, newSignUpMemberShow, newUserShow } from '../react-redux/actions/adminAction';

class Dashboard extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.admin.countUserData === null) {
            this.props.countUserShow()
        }
        if (this.props.admin.countMemberData === null) {
            this.props.countMemberShow()
        }
        if (this.props.admin.countVocabData === null) {
            this.props.countVocabShow()
        }
        if (this.props.admin.countGrammarData === null) {
            this.props.countGrammarShow()
        }
        if (this.props.admin.countAlphabetData === null) {
            this.props.countAlphabetShow()
        }
        if (this.props.admin.countCommunicationData === null) {
            this.props.countCommunicationShow()
        }
        if (this.props.admin.newUserData === null) {
            this.props.newUserShow()
        }
        if (this.props.admin.newSignUpMemberData === null) {
            this.props.newSignUpMemberShow()
        }
    }

    componentDidUpdate() {
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

    showCountUser = () => {
        if (this.props.admin.countUserData !== null) {
            const countUser = this.props.admin.countUserData[0].count;
            return (
                <ContentCount styles="count countuser" tittle="Tổng người dùng" count={countUser} />
            )
        }
    }
    showCountMember = () => {
        if (this.props.admin.countMemberData !== null) {
            const countmember = this.props.admin.countMemberData[0].count;
            return (
                <ContentCount styles="count countmember" tittle="Tổng thành viên" count={countmember} />
            )
        }
    }
    showCountVocab = () => {
        if (this.props.admin.countVocabData !== null) {
            const countVocab = this.props.admin.countVocabData[0].count;
            return (
                <ContentCount styles="count countvocab" tittle="Tổng từ vựng" count={countVocab} />
            )
        }
    }
    showCountAlphabet = () => {
        if (this.props.admin.countAlphabetData !== null) {
            const countAlphabet = this.props.admin.countAlphabetData[0].count;
            return (
                <ContentCount styles="count countAlphabet" tittle="Tổng bảng chữ cái" count={countAlphabet} />
            )
        }
    }
    showCountGrammar = () => {
        if (this.props.admin.countGrammarData !== null) {
            const countGrammar = this.props.admin.countGrammarData[0].count;
            return (
                <ContentCount styles="count countGrammar" tittle="Tổng ngữ pháp" count={countGrammar} />
            )
        }
    }
    showCountCommunication = () => {
        if (this.props.admin.countCommunicationData !== null) {
            const countCommunication = this.props.admin.countCommunicationData[0].count;
            return (
                <ContentCount styles="count countCommunication" tittle="Tổng giao tiếp" count={countCommunication} />
            )
        }
    }
    showNewUser = () => {
        if (this.props.admin.newUserData !== null) {
            return this.props.admin.newUserData.map(value => {
                return (
                    <NewUser key={`admin + ${value.user_id}`} name={value.fullname} />
                )
            })
        }
    }
    showNewSignUpMember = () => {
        if (this.props.admin.newSignUpMemberData !== null) {
            return this.props.admin.newSignUpMemberData.map(value => {
                return (
                    <NewSignUPMembers key={`admin + ${value.signupmember_id}`} name={value.fullname} timesignup = {value.timesignup}/>
                )
            })
        }
    }

    render() {
        const { user } = this.props.auth;
        const { isNavigateLogOut } = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <div className="admin">
                <NavbarAdmin fullname={user.fullname} logout={this.logOutButton} />
                <main>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-6 col-sm-3 col-md-3 col-xl-3 menuAll">
                                <MenuAdmin />
                            </div>
                            {/* end menuAll  */}
                            <div className="col">
                                <div className="contentAll">
                                    <div className="contentCount">
                                        {this.showCountUser()}
                                        {this.showCountMember()}
                                        {this.showCountVocab()}
                                        {this.showCountAlphabet()}
                                        {this.showCountGrammar()}
                                        {this.showCountCommunication()}
                                    </div>
                                    {/* end contentCount */}
                                    <div className="contentNew">
                                        <div className="newUser">
                                            <h3>Người dùng mới</h3>
                                            <ul>
                                                {this.showNewUser()}
                                            </ul>
                                        </div>
                                        {/* end newUser */}
                                        <div className="newSignUPMembers">
                                            <h3>Đăng ký thành viên mới</h3>
                                            <ul>
                                                {this.showNewSignUpMember()}
                                            </ul>
                                        </div>
                                        {/* end newSignUPMembers */}
                                    </div>
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
    countUserShow,
    countMemberShow,
    countAlphabetShow,
    countVocabShow,
    countGrammarShow,
    countCommunicationShow,
    newUserShow,
    newSignUpMemberShow
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
