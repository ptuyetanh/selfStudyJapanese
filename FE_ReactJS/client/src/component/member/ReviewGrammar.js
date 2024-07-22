import React, { Component } from 'react';
import MenuMember from './MenuMember';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import ProgressGrammar from '../grammar/ProgressGrammar';
import ViewAndChoose from '../review/ViewAndChoose';
import { Navigate } from 'react-router-dom';
import Flashcard from '../grammar/Flashcard';
import { reviewGrammar } from '../react-redux/actions/reviewAction';
import ReviewSuccessG from '../review/ReviewSuccessG';
import { grammarShow } from '../react-redux/actions/studyAction';

class ReviewGrammar extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.review.reviewGrammarData === null) {
            this.props.reviewGrammar();
        }
        if (this.props.study.grammarData === null) {
            this.props.grammarShow();
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
            numberGrammarReviewNow: 0,
            score: 0
        }
    }

    howToLearnNext = () => {
        this.setState((prevState) => {
            const numberHowtolearnNext = prevState.numberHowtolearnNow + 1;
            const numberGrammarReviewNext = numberHowtolearnNext > 1 ? prevState.numberGrammarReviewNow + 1 : prevState.numberGrammarReviewNow;
            const numberHowtolearnReset = numberHowtolearnNext > 1 ? 0 : numberHowtolearnNext;
            return {
                numberHowtolearnNow: numberHowtolearnReset,
                numberGrammarReviewNow: numberGrammarReviewNext,
                score: prevState.score + 5.56
            }
        });
    }
    howToLearnBackChooseName = () => {
        this.setState((prevState) => ({
            numberHowtolearnNow: 0,
            score: prevState.score - 5.56
        }));
    }

    howToLearn = (user_id) => {
        if (this.props.review.reviewGrammarData !== null) {
            const grammarReview = this.props.review.reviewGrammarData.filter(value => value.user_id === user_id);
            console.log(grammarReview);
            const { numberHowtolearnNow, numberGrammarReviewNow } = this.state;
            if (numberGrammarReviewNow >= grammarReview.length) {
                return (
                    <ReviewSuccessG grammarReview={grammarReview} user_id={user_id} linkto={'/homeMember/'} />
                )
            }
            const reviewGrammarNow = grammarReview[numberGrammarReviewNow];
            console.log(reviewGrammarNow);
            switch (numberHowtolearnNow) {
                case 0:
                    return <Flashcard sound={reviewGrammarNow.sound} name={reviewGrammarNow.name} example={reviewGrammarNow.example} mean={reviewGrammarNow.mean} mean_example={reviewGrammarNow.mean_example} explain={reviewGrammarNow.explain} howToLearnNext={this.howToLearnNext} />
                case 1:
                    return <ViewAndChoose mean={reviewGrammarNow.mean} name={reviewGrammarNow.name} example={reviewGrammarNow.example} mean_example={reviewGrammarNow.mean_example} grammar_id={reviewGrammarNow.grammar_id} howToLearnNext={this.howToLearnNext} howToLearnBackChooseName={this.howToLearnBackChooseName} />
                default:
                    break;
            }
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
                    <div className="container">
                        <div className="studyGrammar">
                            <ProgressGrammar linkto={'/homeMember'} score={this.state.score} />
                            {/* end progress_grammar */}
                            <div className="studyGrammarLesson">
                                <div className="howToLearn">
                                    {this.howToLearn(user.user_id)}
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
        review: state.review,
        study:state.study
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    reviewGrammar,
    grammarShow
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewGrammar);