import React, { Component } from 'react';
import MenuHome from './MenuHome';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';
import { grammarLessonShow } from '../react-redux/actions/lessonAction';
import withRouter from '../router/withRouter';
import LessonFree from '../lesson/LessonFree';
import LessonLook from '../lesson/LessonLook';

class SeeGrammarLessonPrivate extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.lesson.grammarLessonData === null) {
            this.props.grammarLessonShow()
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    showLessonFree = () => {
        const {params} = this.props;
        if(this.props.lesson.grammarLessonData !== null ) {
            const lessonGrammarFree = this.props.lesson.grammarLessonData.find(value => value.level_id === params.id_level);
            if(lessonGrammarFree){
                return <LessonFree lesson={lessonGrammarFree.lesson_name}/>
            }
        }
    }
    showLessonLook = () => {
        const {params} = this.props;
        if(this.props.lesson.grammarLessonData !== null ) {
            const lessonFree = this.props.lesson.grammarLessonData.findIndex(value => value.level_id === params.id_level)
            const lessonGrammarLook =  this.props.lesson.grammarLessonData.filter((value,lessonLook) => value.level_id === params.id_level && lessonLook !== lessonFree);
            return lessonGrammarLook.map((value) => {
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
                <MenuHome fullname = {user.fullname} logout = {this.logOutButton}/>
                <div className="content">
                    <div className="see_grammar_lesson container">
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
    grammarLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SeeGrammarLessonPrivate));