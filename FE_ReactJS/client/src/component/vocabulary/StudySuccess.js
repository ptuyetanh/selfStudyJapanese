import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../router/withRouter';

class StudySuccess extends Component {
    render() {
        const {params} = this.props
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
                <Link to = {'/seeVocabUser/' + params.level +'/'+ params.id_level}
                    name=""
                    id=""
                    className="btn btn-primary btnVocabCStudy"
                    role="button"
                >
                    Tiếp tục
                </Link>
            </div>
        );
    }
}

export default withRouter(StudySuccess);