import React, { Component } from 'react';
import MenuHome from './MenuHome';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import ProgressGrammar from '../grammar/ProgressGrammar';
import ViewAndChoose from '../grammar/ViewAndChoose';
import { Navigate } from 'react-router-dom';
import Flashcard from '../grammar/Flashcard';
import { grammarShow } from '../react-redux/actions/studyAction';
import withRouter from '../router/withRouter';

class StudyGrammarUser extends Component {

    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.study.grammarData === null) {
            this.props.grammarShow()
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
            numberGrammarStudyNow: 0,
            score:0
        }
    }

    howToLearnNext = () => {
        this.setState((prevState) => {
            const numberHowtolearnNext = prevState.numberHowtolearnNow + 1;
            const numberGrammarStudyNext = numberHowtolearnNext > 2 ? prevState.numberGrammarStudyNow + 1 : prevState.numberGrammarStudyNow ;
            const numberHowtolearnReset = numberHowtolearnNext > 2 ? 0 : numberHowtolearnNext;
            return {
                numberHowtolearnNow : numberHowtolearnReset,
                numberGrammarStudyNow : numberGrammarStudyNext,
                score: prevState.score + 5.56
            }
        });
    }

    howToLearn = () => {
        const {params} = this.props
        if (this.props.study.grammarData !== null) {
            const grammarStudy = this.props.study.grammarData.filter(value => value.lesson_name === params.lesson_name && value.level_id === params.id_level);
            console.log(grammarStudy);
            const {numberHowtolearnNow, numberGrammarStudyNow} = this.state;
            if (numberGrammarStudyNow >= grammarStudy.length) {
                return (
                    <h2>Học thành công</h2>
                )
            }
            const studyGrammarNow = grammarStudy[numberGrammarStudyNow];
            switch (numberHowtolearnNow) {
                case 0:
                    return <Flashcard sound = {studyGrammarNow.sound} name = {studyGrammarNow.name} example = {studyGrammarNow.example} mean = {studyGrammarNow.mean}
                    mean_example = {studyGrammarNow.mean_example} explain = {studyGrammarNow.explain} howToLearnNext = {this.howToLearnNext}/>
                case 1:
                    return <ViewAndChoose/>
                case 2:
                    return <ViewAndChoose/>
            
                default:
                    break;
            } 
        }
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
                    <div className="container">
                        <div className="studyGrammar">
                            <ProgressGrammar linkto = {'/seeGrammarUser/' + params.level + '/' + params.id_level} score = {this.state.score}/>
                            {/* end progress_grammar */}
                            <div className="studyGrammarLesson">
                                <div className="howToLearn">
                                    {this.howToLearn()}
                                </div>
                                {/*end howToLearn */}
                            </div>
                            {/* end studyGrammarLesson */}
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
    grammarShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudyGrammarUser));