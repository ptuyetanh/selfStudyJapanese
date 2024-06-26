import React, { Component } from 'react';
import MenuMember from './MenuMember';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';
import { grammarLessonShow } from '../react-redux/actions/lessonAction';
import withRouter from '../router/withRouter';
import LessonMember from '../lesson/LessonMember';

class SeeGrammarLessonMember extends Component {
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
    showLesson = () => {
        const { params } = this.props;
        if (this.props.lesson.grammarLessonData !== null) {
            const lessonGrammar = this.props.lesson.grammarLessonData.filter((value) => value.level_id === params.id_level);
            return lessonGrammar.map((value) => {
                return <LessonMember key={value.level_id} lesson={value.lesson_name} linkto={'/seeGrammarMember/' + params.level + '/' + params.id_level + '/' + value.lesson_name}/>
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
                    <div className="see_grammar_lesson container">
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
        logOut: state.logOut,
        lesson: state.lesson
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    grammarLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SeeGrammarLessonMember));