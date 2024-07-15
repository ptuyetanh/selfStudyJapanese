import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ContentReview extends Component {
    showVocabReview = () => {
        return (
            <div className="vocabulary vocabReview">
                <div className="reviewVocab">
                    <Link className="random">
                        <h3>Cách ôn tập từ vựng</h3>
                        <h2>1 tiếng/Ôn tập lại</h2>
                    </Link>
                    <Link className="countVocab">
                        <h3>Ôn tập từ vựng</h3>
                        <h4>Số từ ôn tập</h4>
                        <h1 className="count">{this.props.countvocab}</h1>
                    </Link>
                </div>
                <Link to='/homeMember/reviewVocab' type="button" className="btn btn-primary">
                    Từ vựng
                </Link>
            </div>
        )
    }
    showGrammarReview = () => {
        return (
            <div className="grammar grammarReview">
                <div className="reviewGrammar">
                    <Link className="random">
                        <h3>Cách ôn tập ngữ pháp</h3>
                        <h2>1 tiếng/Ôn tập lại</h2>
                    </Link>
                    <Link className="countGrammar">
                        <h3>Ôn tập ngữ pháp</h3>
                        <h4>Số từ ôn tập</h4>
                        <h1 className="count">{this.props.countgrammar}</h1>
                    </Link>
                </div>
                <Link to={'/homeMember/reviewGrammar'} type="button" className="btn btn-primary">
                    Ngữ pháp
                </Link>
            </div>
        )
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

export default ContentReview;