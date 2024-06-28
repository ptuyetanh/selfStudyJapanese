import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showCountGrammar, showCountVocab } from '../react-redux/actions/reviewAction';

class ContentReview extends Component {
    componentDidMount() {
        if (this.props.review.countVocabData === null) {
            this.props.showCountVocab();
        }
        if (this.props.review.countGrammarData === null) {
            this.props.showCountGrammar();
        }
    }
    showVocabReview = () => {
        if (this.props.review.countVocabData !== null) {
            const showCountVocab = this.props.review.countVocabData[0].count;
            return (
                <div className="vocabulary vocabReview">
                    <div className="reviewVocab">
                        <Link className="random">
                            <h3>Ôn tập từ vựng</h3>
                            <h2>NGẪU NHIÊN</h2>
                        </Link>
                        <Link className="countVocab">
                            <h3>Ôn tập từ vựng</h3>
                            <h4>Số từ ôn tập</h4>
                            <h1 className="count">{showCountVocab}</h1>
                        </Link>
                    </div>
                    <button type="button" className="btn btn-primary">
                        Từ vựng
                    </button>
                </div>
            )
        }
    }
    showGrammarReview = () => {
        if (this.props.review.countGrammarData !== null) {
            const showCountGrammar = this.props.review.countGrammarData[0].count;
            return (
                <div className="grammar grammarReview">
                    <div className="reviewGrammar">
                        <Link className="random">
                            <h3>Ôn tập ngữ pháp</h3>
                            <h2>NGẪU NHIÊN</h2>
                        </Link>
                        <Link className="countGrammar">
                            <h3>Ôn tập ngữ pháp</h3>
                            <h4>Số từ ôn tập</h4>
                            <h1 className="count">{showCountGrammar}</h1>
                        </Link>
                    </div>
                    <button type="button" className="btn btn-primary">
                        Ngữ pháp
                    </button>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="content">
                {this.showVocabReview()}
                {this.showGrammarReview()}
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        review: state.review
    }
}
const mapDispatchToProps = {
    showCountVocab,
    showCountGrammar
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentReview);