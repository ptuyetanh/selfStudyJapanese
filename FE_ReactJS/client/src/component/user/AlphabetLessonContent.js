import React, { Component } from 'react';
import MenuHome from './MenuHome';
import ALessonContent from '../alphabet/ALessonContent';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Link, Navigate } from 'react-router-dom';
import { aLessonContentShow } from '../react-redux/actions/lessonAction';
import withRouter from '../router/withRouter';

class AlphabetLessonContent extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if(this.props.lesson.aLessonContentData === null){
            this.props.aLessonContentShow()
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    alphabetLessonContent = () => {
        const {params} = this.props;
        console.log(params);
        if(this.props.lesson.aLessonContentData !== null){
            console.log(this.props.lesson.aLessonContentData);
            const aLessonContent = this.props.lesson.aLessonContentData.filter(value => value.lesson_id === params.id_lesson);
            return aLessonContent.map(value => {
                return <ALessonContent key={value.lesson_id + value.type} linkTo = {'/studyAlphabetUser/'+ params.Lesson +'/'+ params.id_lesson + '/' + value.type} nameContent= {value.type}/>
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
                    <div className="container alphbet_lessonContent">
                        <Link to='/seeAlphabetUser'
                            name=""
                            id=""
                            className="btn btn-primary arrowBack"
                            role="button"
                        >
                            <i className="fa-solid fa-arrow-left-long" />
                        </Link>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {this.alphabetLessonContent()}
                            </div>
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
    aLessonContentShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AlphabetLessonContent))
