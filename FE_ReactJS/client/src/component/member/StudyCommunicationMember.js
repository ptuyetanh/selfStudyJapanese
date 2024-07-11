import React, { Component } from 'react';
import MenuMember from './MenuMember';
import ChatBots from '../communication/ChatBots';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Link, Navigate } from 'react-router-dom';
import { communicationShow } from '../react-redux/actions/studyAction';
import withRouter from '../router/withRouter';

class StudyCommunicationMember extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.study.communicationData === null) {
            this.props.communicationShow()
        }
    }
    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    showChatBot = () => {
        const { params } = this.props;
        if (this.props.study.communicationData !== null) {
            const findChatbot = this.props.study.communicationData.find(value => value.communication_id === params.id_lesson);
            return (
                <ChatBots id={findChatbot.communication_id} sound_shadowing={findChatbot.sound_shadowing} one_a={findChatbot.one_a} one_b={findChatbot.one_b} two_a={findChatbot.two_a} two_b={findChatbot.two_b} three_a={findChatbot.three_a} three_b={findChatbot.three_b} four_a={findChatbot.four_a} four_b={findChatbot.four_b} five_a={findChatbot.five_a} five_b={findChatbot.five_b} mean_shadowing={findChatbot.mean_shadowing} />
            )
        }
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
                <div className='content'>
                    <Link to='/seeCommunicationMember'
                        className="btn btn-primary closeCommunication"
                        role="button">
                        <i class="fa-solid fa-xmark"></i>
                    </Link>
                    <div className='communicationStudy'>
                        {this.showChatBot()}
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
        study: state.study
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    communicationShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudyCommunicationMember));