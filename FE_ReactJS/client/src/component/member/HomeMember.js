import React, { Component } from 'react';
import MenuMember from './MenuMember';
import { connect } from 'react-redux';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { isAuthUser } from '../react-redux/actions/authAction';
import { Link, Navigate } from 'react-router-dom';
import NoReview from '../review/NoReview';
import ContentReview from '../review/ContentReview';
import { showReview } from '../react-redux/actions/reviewAction';

class HomeMember extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.review.reviewData === null) {
            this.props.showReview();
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    showReview = (user_id) => {
        if(this.props.review.reviewData !== null){
            console.log(this.props.review.reviewData);
            const findUserReview = this.props.review.reviewData.filter(value => value.user_id === user_id)
            console.log(findUserReview);
            if (findUserReview.length > 0) {
                return <ContentReview user_id = {findUserReview[0].user_id} countvocab = {findUserReview[0].countvocab} countgrammar = {findUserReview[0].countgrammar}/>
            }else{
                return <NoReview />
            }
        }else {
            return <NoReview />
        }
    }

    render() {
        const { user } = this.props.auth;
        const { isNavigateLogOut } = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        console.log(user.user_id);
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
                {this.showReview(user.user_id)}
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
    showReview
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeMember);