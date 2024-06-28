import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import withRouter from '../router/withRouter';
import { connect } from 'react-redux';
import { saveVocabShow } from '../react-redux/actions/studyAction';

class StudySuccess extends Component {
    
    clickSaveVocab = () => {
        this.props.saveVocabShow(this.props.vocabStudy,this.props.user_id);
        return <Navigate to = "/homeMember" />
    }
    render() {
        return (
            <div className='studySuccess'>
                <h1 className="h2">HỌC THÀNH CÔNG</h1>
                <div className="container">
                    <ul className="listVocab">
                        {this.props.vocabStudy.map(value =>
                            <li key={value.vocab_id}>
                                <p className="name_vocab">{value.name}</p>
                                <p className="mean_vocab">{value.mean}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <Link to = {this.props.linkto}
                    className="btn btn-primary btnVocabCStudy"
                    onClick={this.clickSaveVocab()}
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
    saveVocabShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudySuccess));