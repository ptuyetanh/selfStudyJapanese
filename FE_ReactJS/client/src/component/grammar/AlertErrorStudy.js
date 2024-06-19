import React, { Component } from 'react';

class AlertErrorStudy extends Component {
    render() {
        return (
            <div className="alerts alertError ">
                <h2>Đáp án sai</h2>
                <div className="alert">
                    <div className="contentAlert">
                        <p>{this.props.name +' : '+ this.props.mean}</p>
                        <p>{this.props.example +' : '+ this.props.mean_example}</p>
                    </div>
                    <button
                        name=""
                        id=""
                        className="btn btn-primary learnAgain"
                        onClick={this.props.howToLearnBack}
                    >
                        Học lại
                    </button>
                </div>
            </div>
        );
    }
}

export default AlertErrorStudy;