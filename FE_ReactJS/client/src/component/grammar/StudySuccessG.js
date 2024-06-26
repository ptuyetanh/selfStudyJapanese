import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveGrammarShow } from '../react-redux/actions/studyAction';

class StudySuccessG extends Component {
    saveGrammar = () => {
        this.props.saveGrammarShow(this.props.grammarStudy,this.props.user_id)
    }
    render() {
        return (
            <div className='studySuccessG'>
                <h1 className="h2">HỌC THÀNH CÔNG</h1>
                <div className="container">
                    <ul className="list">
                        {this.props.grammarStudy.map(value =>
                            <li key={value.vocab_id}>
                                <p className="name">{value.name}</p>
                                <p className="mean">{value.mean}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <Link to = {this.props.linkto}
                    className="btn btn-primary btnGrammarStudy"
                    onClick={this.saveGrammar()}
                >
                    Tiếp tục
                </Link>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        study: state.study
    }
}
const mapDispatchToProps = {
    saveGrammarShow
}
export default connect(mapStateToProps, mapDispatchToProps)(StudySuccessG);