import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../router/withRouter';

class StudySuccessG extends Component {
    render() {
        const {params} = this.props
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
                <Link to = {'/seeGrammarUser/' + params.level +'/'+ params.id_level}
                    name=""
                    id=""
                    className="btn btn-primary btnGrammarStudy"
                >
                    Tiếp tục
                </Link>
            </div>
        );
    }
}

export default withRouter(StudySuccessG);