import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { updateReview } from '../react-redux/actions/reviewAction';

class ReviewSuccessG extends Component {
    clickUpdateGrammar = () => {
        this.props.updateReview(this.props.grammarReview);
        return <Navigate to = "/homeMember" />
    }
    render() {
        return (
            <div className='studySuccessG'>
                <h1 className="h2">ÔN TẬP THÀNH CÔNG</h1>
                <div className="container">
                    <ul className="list">
                        {this.props.grammarReview.map(value =>
                            <li key={value.grammar_id}>
                                <p className="name">{value.name}</p>
                                <p className="mean">{value.mean}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <Link to = {this.props.linkto}
                    className="btn btn-primary btnGrammarStudy"
                    onClick={this.clickUpdateGrammar()}
                >
                    Tiếp tục
                </Link>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        review: state.review
    }
}
const mapDispatchToProps =  {
    updateReview
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewSuccessG)