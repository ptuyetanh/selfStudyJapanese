import React, { Component } from 'react';
import MenuHome from './MenuHome';
import LessonContentG from '../grammar/LessonContentG';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Link, Navigate } from 'react-router-dom';
import { gLessonContentShow } from '../react-redux/actions/lessonAction';
import withRouter from '../router/withRouter';

class GrammarLessonContent extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.lesson.gLessonContentData === null) {
            this.props.gLessonContentShow()
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    showLessonContent = () => {
        const { params } = this.props;
        if (this.props.lesson.gLessonContentData !== null) {
            const filterGLessonContent = this.props.lesson.gLessonContentData.filter(value => value.lesson_name === params.lesson_name && value.level_id === params.id_level);
            return filterGLessonContent.map(value => {
                return (
                    <LessonContentG key={value.grammar_id} name = {value.name} mean = {value.mean}/>
                )
            })
        }
    }

    render() {
        const {params} = this.props;
        const { user } = this.props.auth;
        const { isNavigateLogOut } = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <main>
                <MenuHome fullname={user.fullname} logout={this.logOutButton} />
                <div className="content">
                    <div className="grammarLessonContent">
                        <div className="h2">Nội dung bài học</div>
                        <div className="container">
                            <ul className="listgrammar">
                                {this.showLessonContent()}
                            </ul>
                        </div>
                        <Link
                            to = {'/seeGrammarUser/' + params.level +'/'+ params.id_level +'/'+ params.lesson_name + '/study'}
                            name=""
                            id=""
                            className="btn btn-primary btnGrammarCStudy"
                        >
                            Tiến hành học
                        </Link>
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
    gLessonContentShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GrammarLessonContent))