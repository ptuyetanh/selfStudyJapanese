import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import MenuMember from './MenuMember';
import { Navigate } from 'react-router-dom';
import ProgressVocab from '../vocabulary/ProgressVocab';
import { reviewVocab } from '../react-redux/actions/reviewAction';
import ReviewSuccess from '../review/ReviewSuccess';
import ViewAndWrite from '../vocabulary/ViewAndWrite';
import Flashcard from '../vocabulary/Flashcard';

class ReviewVocab extends Component {
    
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.review.reviewVocabData === null) {
            this.props.reviewVocab()
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
            numberVocabReviewNow: 0,
            score:0
        }
    }

    howToLearnNext = () => {
        this.setState((prevState) => {
            const numberHowtolearnNext = prevState.numberHowtolearnNow + 1;
            const numberVocabReviewNext = numberHowtolearnNext > 1 ? prevState.numberVocabReviewNow + 1 :prevState.numberVocabReviewNow;      
            const numberHowtolearnReset = numberHowtolearnNext > 1 ? 0 :numberHowtolearnNext;   
            return {
                numberHowtolearnNow: numberHowtolearnReset,
                numberVocabReviewNow: numberVocabReviewNext,
                score : prevState.score + 5.56
            };
        });
    }
    howToLearnBackWrite = () => {
        this.setState((prevState) => ({
            numberHowtolearnNow: 0,
            score: prevState.score - 5.56
        }));
    }
    howToLearn = (user_id) => {
        if (this.props.review.reviewVocabData !== null) {
            const vocabReview = this.props.review.reviewVocabData;
            console.log(vocabReview);
            const {numberHowtolearnNow, numberVocabReviewNow} = this.state;
            if (numberVocabReviewNow >= vocabReview.length) {
                return (<ReviewSuccess vocabReview = {vocabReview} user_id = {user_id} linkto = '/homeMember'/>)
            }else{
                const vocabReviewNow = vocabReview[numberVocabReviewNow];
                switch (numberHowtolearnNow) {
                    case 0:
                        return <Flashcard sound ={vocabReviewNow.sound} name = {vocabReviewNow.name} example = {vocabReviewNow.example} mean = {vocabReviewNow.mean} pronunciation = {vocabReviewNow.pronunciation} sino_vietnamese_sound = {vocabReviewNow.sino_vietnamese_sound} howToLearnNext = {this.howToLearnNext}/>
                    case 1:
                        return <ViewAndWrite name = {vocabReviewNow.name} mean = {vocabReviewNow.mean} pronunciation = {vocabReviewNow.pronunciation} example = {vocabReviewNow.example} example_mean = {vocabReviewNow.example_mean} howToLearnNext = {this.howToLearnNext} howToLearnBackWrite = {this.howToLearnBackWrite}/>
                    default:
                        break;
                }
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
                        <div className="studyVocab">
                            <ProgressVocab linkto = {'/homeMember'} score = {this.state.score}/>
                            {/* end progress_vocab */}
                            <div className="studyVocabLesson">
                                <div className="howToLearn">
                                    {this.howToLearn(user.user_id)}
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
        review:state.review
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    reviewVocab
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewVocab)