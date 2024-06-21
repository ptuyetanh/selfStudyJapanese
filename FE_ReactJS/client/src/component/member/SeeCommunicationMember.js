import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import MenuMember from './MenuMember';
import { Navigate } from 'react-router-dom';
import { communicationLessonShow } from '../react-redux/actions/lessonAction';
import LessonMember from '../lesson/LessonMember';

class SeeCommunicationMember extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.lesson.communicationLessonData === null) {
            this.props.communicationLessonShow()
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    lessonMember = () => {
        if (this.props.lesson.communicationLessonData !== null) {
            return this.props.lesson.communicationLessonData.map(value => {
                return (
                    <LessonMember key={value.communication_id} lesson={value.lesson_name} linkto = {'/seeCommunicationMember/' + value.lesson_name + '/' + value.communication_id + '/study'}/>
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
            <main>
                <MenuMember fullname={user.fullname} logout={this.logOutButton} />
                <div className="content">
                    <div className="see_communication_lesson container">
                        <div className="row">
                            {this.lessonMember()}
                        </div>
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
        lesson: state.lesson
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    communicationLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(SeeCommunicationMember);