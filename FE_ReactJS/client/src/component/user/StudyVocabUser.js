import React, { Component } from 'react';
import MenuHome from './MenuHome';
import { connect } from 'react-redux';
import withRouter from '../router/withRouter';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';
import ProgressVocab from '../vocabulary/ProgressVocab';
import Flashcard from '../vocabulary/Flashcard';
import { vocabularyShow } from '../react-redux/actions/studyAction';
import ListenAndChoose from '../vocabulary/ListenAndChoose';
import ViewAndWrite from '../vocabulary/ViewAndWrite';
import StudySuccess from '../vocabulary/StudySuccess';

class StudyVocabUser extends Component {

    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.study.vocabularyData === null) {
            this.props.vocabularyShow()
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }
    constructor(props) {
        super(props);
        this.state = {
            numberHowtolearnNow: 0,
            numberVocabStudyNow: 0,
            score:0
        }
    }

    howToLearnNext = () => {
        this.setState((prevState) => {
            const numberHowtolearnNext = prevState.numberHowtolearnNow + 1;
            const numberVocabStudyNext = numberHowtolearnNext > 2 ? prevState.numberVocabStudyNow + 1 :prevState.numberVocabStudyNow;      
            const numberHowtolearnReset = numberHowtolearnNext > 2 ? 0 :numberHowtolearnNext;
            return {
                numberHowtolearnNow: numberHowtolearnReset,
                numberVocabStudyNow: numberVocabStudyNext,
                score : prevState.score + 5.56
            };
        });
    }
    howToLearnBackChoose = () => {
        this.setState((prevState) => ({
            numberHowtolearnNow: 0,
            score: prevState.score - 5.56
        }));
    }
    howToLearnBackWrite = () => {
        this.setState((prevState) => ({
            numberHowtolearnNow: 0,
            score: prevState.score - 11.1
        }));
    }
    howToLearn = () => {
        const {params} = this.props;
        if (this.props.study.vocabularyData !== null) {
            const vocabStudy = this.props.study.vocabularyData.filter(value => value.lesson_name === params.lesson_name);
            console.log(vocabStudy);
            const {numberHowtolearnNow ,numberVocabStudyNow} = this.state;
            if (numberVocabStudyNow >= vocabStudy.length) {
                return (<StudySuccess vocabStudy = {vocabStudy}/>)
            }
            const studyVocabNow = vocabStudy[numberVocabStudyNow];
            switch (numberHowtolearnNow) {
                case 0:
                    return <Flashcard sound ={studyVocabNow.sound} name = {studyVocabNow.name} example = {studyVocabNow.example} mean = {studyVocabNow.mean} pronunciation = {studyVocabNow.pronunciation} sino_vietnamese_sound = {studyVocabNow.sino_vietnamese_sound} howToLearnNext = {this.howToLearnNext}/>
                case 1:
                    return <ListenAndChoose sound ={studyVocabNow.sound} name = {studyVocabNow.name} example = {studyVocabNow.example} mean = {studyVocabNow.mean} example_mean = {studyVocabNow.example_mean} pronunciation = {studyVocabNow.pronunciation} sino_vietnamese_sound = {studyVocabNow.sino_vietnamese_sound} howToLearnNext = {this.howToLearnNext} vocab_id = {studyVocabNow.vocab_id} howToLearnBackChoose = {this.howToLearnBackChoose}/>
                case 2:
                    return <ViewAndWrite name = {studyVocabNow.name} mean = {studyVocabNow.mean} pronunciation = {studyVocabNow.pronunciation} example = {studyVocabNow.example} example_mean = {studyVocabNow.example_mean} howToLearnNext = {this.howToLearnNext} howToLearnBackWrite = {this.howToLearnBackWrite}/>
                default:
                    break;
            }
        }
    }

    render() {
        const {params} = this.props;
        console.log(params);
        const { user } = this.props.auth;
        const { isNavigateLogOut } = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <main>
                <MenuHome fullname={user.fullname} logout={this.logOutButton} />
                <div className="content">
                    <div className="container">
                        <div className="studyVocab">
                            <ProgressVocab linkto = {'/seeVocabUser/' + params.level +'/' + params.id_level} score = {this.state.score}/>
                            {/* end progress_vocab */}
                            <div className="studyVocabLesson">
                                <div className="howToLearn">
                                    {this.howToLearn()}
                                </div>
                                {/*end howToLearn */}
                            </div>
                            {/* end studyVocabLesson */}
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
    vocabularyShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudyVocabUser));