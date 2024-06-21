import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuMember from './MenuMember';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';
import AlphabetMember from '../alphabet/AlphabetMember';
import { alphabetLessonShow } from '../react-redux/actions/lessonAction';

class SeeAlphabetMember extends Component {

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

    alphabetMember = () => {
        if (this.props.lesson.alphabetLessonData !== null) {
            return this.props.lesson.alphabetLessonData.map(value => {
                return <AlphabetMember key={value.lesson_id} lesson={value.name} example={value.example} linkto = {'/seeAlphabetMember/' + value.name +'/'+ value.lesson_id}/>
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
                <MenuMember fullname={user.fullname} logout={this.logOutButton} />
                <div className="content">
                    <div className="see_alphabet container-fluid">
                        <div className="row">
                           {this.alphabetMember()}
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
export default connect(mapStateToProps, mapDispatchToProps)(SeeAlphabetMember);