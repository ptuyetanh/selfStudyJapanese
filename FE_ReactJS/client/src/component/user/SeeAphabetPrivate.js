import React, { Component } from 'react';
import MenuHome from './MenuHome';
import AlphabetFree from '../alphabet/AlphabetFree';
import AlphabetLook from '../alphabet/AlphabetLook';
import { connect } from 'react-redux';
import { alphabetLessonShow } from '../react-redux/actions/lessonAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { isAuthUser } from '../react-redux/actions/authAction';
import { Navigate } from 'react-router-dom';

class SeeAphabetPrivate extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.lesson.alphabetLessonData === null) {
            this.props.alphabetLessonShow()
        }
    }
    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }
    alphabetFree = () => {
        if (this.props.lesson.alphabetLessonData !== null) {
            const alphabetLessonFree = this.props.lesson.alphabetLessonData[0]
            return <AlphabetFree lesson={alphabetLessonFree.name} />
        }
    }
    alphabetLook = () => {
        if (this.props.lesson.alphabetLessonData !== null) {
            const alphabetLessonLook = this.props.lesson.alphabetLessonData.slice(1);
            return alphabetLessonLook.map(value => {
                return <AlphabetLook key={value.lesson_id} lesson={value.name} example={value.example} />
            });
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
                <MenuHome fullname={user.fullname} logout={this.logOutButton} />
                <div className="content">
                    <div className="see_alphabet container-fluid">
                        <div className="row">
                            {this.alphabetFree()}
                            {this.alphabetLook()}
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
    alphabetLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(SeeAphabetPrivate);