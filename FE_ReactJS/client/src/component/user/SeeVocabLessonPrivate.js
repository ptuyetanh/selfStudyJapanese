import React, { Component } from 'react';
import MenuHome from './MenuHome';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';
import { vocabLessonShow } from '../react-redux/actions/lessonAction';
import LessonFree from '../lesson/LessonFree';
import LessonLook from '../lesson/LessonLook';
import withRouter from '../router/withRouter';

class SeeVocabLessonPrivate extends Component {
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

    showLessonFree = () => {
        const {params} = this.props;
        if(this.props.lesson.vocabLessonData !== null ) {
            const lessonVocabFree = this.props.lesson.vocabLessonData.find(value => value.level_id === params.id_level);
            if(lessonVocabFree){
                return <LessonFree lesson={lessonVocabFree.lesson_name}/>
            }
        }
    }
    showLessonLook = () => {
        const {params} = this.props;
        if(this.props.lesson.vocabLessonData !== null ) {
            const lessonFree = this.props.lesson.vocabLessonData.findIndex(value => value.level_id === params.id_level)
            const lessonVocabLook =  this.props.lesson.vocabLessonData.filter((value,lessonLook) => value.level_id === params.id_level && lessonLook !== lessonFree);
            return lessonVocabLook.map((value) => {
                return  <LessonLook key={value.level_id} lesson = {value.lesson_name}/>
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
                <MenuHome fullname={user.fullname} logout={this.logOutButton} />
                <div className="content">
                    <div className="see_vocab_lesson container">
                        <div className="row">
                            {this.showLessonFree()}
                            {this.showLessonLook()}
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
    vocabLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SeeVocabLessonPrivate));