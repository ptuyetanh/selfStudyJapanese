import React, { Component } from 'react';
import MenuHome from './MenuHome';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Link, Navigate } from 'react-router-dom';
import ButtonAlphabet from '../alphabet/ButtonAlphabet';
import AFlashcardActive from '../alphabet/AFlashcardActive';
import AFlashcard from '../alphabet/AFlashcard';
import withRouter from '../router/withRouter';
import { alphabetButtonShow, alphabetFlashcardShow } from '../react-redux/actions/studyAction';

class StudyAlphabetUser extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.study.alphabetButtonData === null) {
            this.props.alphabetButtonShow()
        }
        if (this.props.study.alphabetFlashcardData === null) {
            this.props.alphabetFlashcardShow();
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    buttonAlphabetShow = () => {
        const { params } = this.props
        if (this.props.study.alphabetButtonData !== null) {
            const filterAlphabetButton = this.props.study.alphabetButtonData.filter((value) => value.type === params.content && value.lesson_id === params.id_lesson)
            return filterAlphabetButton.map((value) => {
                return (
                    <ButtonAlphabet key={value.alphabet_id} name={value.name} pronunciation={value.pronunciation} sound={value.sound} />
                )
            })
        }
    }

    AFlashcardActive = () => {
        const { params } = this.props;
        if (this.props.study.alphabetFlashcardData !== null) {
            const findAFlashcardActive = this.props.study.alphabetFlashcardData.find(value => value.type === params.content && value.lesson_id === params.id_lesson);
            return (
                <AFlashcardActive name={findAFlashcardActive.name} example={findAFlashcardActive.example} />
            )
        }
    }
    AFlashcard = () => {
        const { params } = this.props;
        if (this.props.study.alphabetFlashcardData !== null) {
            const AFlashcardActive = this.props.study.alphabetFlashcardData.findIndex(value => value.type === params.content && value.lesson_id === params.id_lesson);
            const filterAFlashcard = this.props.study.alphabetFlashcardData.filter((value, AFlashcard) => value.type === params.content && value.lesson_id === params.id_lesson && AFlashcard !== AFlashcardActive);
            return filterAFlashcard.map(value => {
                return (
                    <AFlashcard key={value.alphabet_id + value.type} name={value.name} example={value.example} />
                )
            })
        }
    }

    render() {
        const { params } = this.props
        const { user } = this.props.auth;
        const { isNavigateLogOut } = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <main>
                <MenuHome fullname={user.fullname} logout={this.logOutButton} />
                <div className="content">
                    <div className="studyAlphabet">
                        <div className="container">
                            <Link to={'/seeAlphabetUser/' + params.Lesson + '/' + params.id_lesson}
                                name=""
                                id=""
                                className="btn btn-primary arrowBack"
                                role="button"
                            >
                                <i className="fa-solid fa-arrow-left-long" />
                            </Link>
                            <div className="lessonAlphabet">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                                            {this.buttonAlphabetShow()}

                                            {/* end btn_alphabet_audio */}
                                        </div>
                                        {/* end btn_alphabet */}
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 flashcards_alphabet_all">
                                            <h2 className="tittle_alphabet">Flashcard ôn tập</h2>
                                            <ul className="flashcards_alphabet">
                                                {this.AFlashcardActive()}
                                                {this.AFlashcard()}
                                            </ul>
                                            <div className="icon">
                                                <i className="fa-solid fa-chevron-right" />
                                                <i className="fa-solid fa-chevron-left" />
                                            </div>
                                            {/* end flashcard */}
                                        </div>
                                    </div>
                                </div>
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
        study: state.study
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    alphabetButtonShow,
    alphabetFlashcardShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudyAlphabetUser));