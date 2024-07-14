import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { updateReview } from '../react-redux/actions/reviewAction';

class ReviewSuccess extends Component {
    clickUpdateVocab = () => {
        this.props.updateReview(this.props.vocabReview);
        return <Navigate to = "/homeMember" />
    }
    render() {
        return (
            <div className='reviewSuccess'>
                <h1 className="h2">ÔN TẬP THÀNH CÔNG</h1>
                <div className="container">
                    <ul className="listVocab">
                        {this.props.vocabReview.map(value =>
                            <li key={value.vocab_id}>
                                <p className="name_vocab">{value.name}</p>
                                <p className="mean_vocab">{value.mean}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <Link to = {this.props.linkto}
                    className="btn btn-primary btnVocabCStudy"
                    onClick={this.clickUpdateVocab()}
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
export default connect(mapStateToProps,mapDispatchToProps)(ReviewSuccess);