import React, { Component } from 'react';
import MenuMember from './MenuMember';
import { connect } from 'react-redux';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { isAuthUser } from '../react-redux/actions/authAction';
import { Link, Navigate } from 'react-router-dom';
import NoReview from '../review/NoReview';
import ContentReview from '../review/ContentReview';
import { showCountReview } from '../react-redux/actions/reviewAction';

class HomeMember extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.review.countReviewData === null) {
            this.props.showCountReview();
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    showReview = () => {
        if(this.props.review.countReviewData !== null){
            if(this.props.review.countReviewData[0].count === '0'){
                return <NoReview />
            }else{
                return <ContentReview />
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
                <Link to="/homeMember/managerLearnedWords" className="managelearned">
                        <img
                            src="/assets/image/managerStudy.svg"
                            className="img-fluid rounded-top"
                            alt=""
                        />
                        <h3>Quản lý từ đã học</h3>
                </Link>
                {this.showReview()}
            </main>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        logOut: state.logOut,
        review: state.review
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    showCountReview
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeMember);