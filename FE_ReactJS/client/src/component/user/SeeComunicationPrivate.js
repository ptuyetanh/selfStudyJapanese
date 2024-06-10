import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import MenuHome from './MenuHome';
import { Navigate } from 'react-router-dom';
import LessonFree from '../lesson/LessonFree';
import LessonLook from '../lesson/LessonLook';
import { communicationLessonShow } from '../react-redux/actions/lessonAction';

class SeeComunicationPrivate extends Component {
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
    lessonFree = () => {
        if (this.props.lesson.communicationLessonData !== null) {
            const lessonComFree = this.props.lesson.communicationLessonData[0];
            return <LessonFree lesson={lessonComFree.lesson_name} />
        }
    }
    lessonLook = () => {
        if (this.props.lesson.communicationLessonData !== null) {
            const lessonComLook = this.props.lesson.communicationLessonData.slice(1);
            return lessonComLook.map(value => {
                return (
                    <LessonLook key={value.communication_id} lesson={value.lesson_name} />
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
        else {
            return (
                <main>
                    <MenuHome fullname={user.fullname} logout={this.logOutButton} />
                    <div className="content">
                        <div className="see_communication_lesson container">
                            <div className="row">
                                {this.lessonFree()}
                                {this.lessonLook()}
                            </div>
                        </div>
                    </div>
                </main>
            );
        }
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
export default connect(mapStateToProps, mapDispatchToProps)(SeeComunicationPrivate)
