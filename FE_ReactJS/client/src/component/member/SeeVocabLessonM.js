import React, { Component } from 'react';
import MenuMember from './MenuMember';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { vocabLessonShow } from '../react-redux/actions/lessonAction';
import LessonMember from '../lesson/LessonMember';
import withRouter from '../router/withRouter';
import { Navigate } from 'react-router-dom';

class SeeVocabLessonM extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if(this.props.lesson.vocabLessonData === null) {
            this.props.vocabLessonShow()
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    showLesson = () => {
        const {params} = this.props;
        if(this.props.lesson.vocabLessonData !== null ) {
            const lessonVocab =  this.props.lesson.vocabLessonData.filter(value => value.level_id === params.id_level );
            console.log(lessonVocab);
            return lessonVocab.map((value) => {
                return  <LessonMember key={value.level_id} lesson = {value.lesson_name}
                linkto = {'/seeVocabMember/' + params.level + '/' + params.id_level + '/' + value.lesson_name}/>
            })
        }
    }

    render() {
        const {user} = this.props.auth;
        const {isNavigateLogOut} = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <main>
                <MenuMember fullname={user.fullname} logout={this.logOutButton}/>
                <div className="content">
                    <div className="see_vocab_lesson container">
                        <div className="row">
                            {this.showLesson()}
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
        logOut:state.logOut,
        lesson:state.lesson
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    vocabLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SeeVocabLessonM));