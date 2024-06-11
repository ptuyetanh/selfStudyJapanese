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

class StudyAlphabetUser extends Component {
    componentDidMount() {
        this.props.isAuthUser();
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }
    render() {
        const {params} = this.props
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
                            <Link to={'/seeAlphabetUser/'+ params.Lesson + '/' + params.id_lesson}
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
                                            <ButtonAlphabet/>
                                            {/* end btn_alphabet_audio */}
                                        </div>
                                        {/* end btn_alphabet */}
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 flashcards_alphabet_all">
                                            <h2 className="tittle_alphabet">Flashcard ôn tập</h2>
                                            <ul className="flashcards_alphabet">
                                                <AFlashcardActive/>
                                                <AFlashcard/>
                                                <AFlashcard/>
                                                <AFlashcard/>
                                                <AFlashcard/>
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
        logOut: state.logOut
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudyAlphabetUser));