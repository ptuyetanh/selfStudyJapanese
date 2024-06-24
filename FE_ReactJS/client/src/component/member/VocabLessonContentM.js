import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuMember from './MenuMember';
import withRouter from '../router/withRouter';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { vLessonContentShow } from '../react-redux/actions/lessonAction';
import LessonContentV from '../vocabulary/LessonContentV';
import { Link, Navigate } from 'react-router-dom';

class VocabLessonContentM extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.lesson.vLessonContentData === null) {
            this.props.vLessonContentShow();
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    lessonContentVocab = () => {
        const {params} = this.props;
        if (this.props.lesson.vLessonContentData !== null) {
            const findLessonContent = this.props.lesson.vLessonContentData.filter(value => value.lesson_name === params.lesson_name & value.level_id === params.id_level)
            return findLessonContent.map(value => {
                return (
                    <LessonContentV key={value.name} name = {value.name} mean = {value.mean}/>
                )
            })
        }
    }
    render() {
        const {params} = this.props;
        const {user} = this.props.auth;
        const {isNavigateLogOut} = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <main>
                <MenuMember fullname = {user.fullname} logout = {this.logOutButton}/>
                <div className="content">
                    <div className="vocabLessonContent">
                        <div className="h2">Nội dung bài học</div>
                        <div className="container">
                            <ul className="listVocab">
                                {this.lessonContentVocab()}
                            </ul>
                        </div>
                        <Link to = {'/seeVocabMember/' + params.level + '/' + params.id_level +'/'+ params.lesson_name +'/study'}
                            className="btn btn-primary btnVocabCStudy"
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
const mapDispatchToProps =  {
    isAuthUser,
    logOutUser,
    vLessonContentShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VocabLessonContentM))