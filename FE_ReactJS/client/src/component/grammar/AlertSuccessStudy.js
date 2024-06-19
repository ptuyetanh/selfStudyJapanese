import React, { Component } from 'react';

class AlertSuccessStudy extends Component {
    render() {
        return (
            <div className="alerts alertSuccess">
                <h2>Đáp án đúng</h2>
                <div className="alert">
                    <div className="contentAlert">
                        <p>{this.props.name + ' : ' + this.props.mean}</p>
                        <p>{this.props.example + ' : ' + this.props.mean_example}</p>
                    </div>
                    <button
                        name=""
                        id=""
                        className="btn btn-primary continue"
                        onClick={this.props.howToLearnNext}
                    >
                        Tiếp tục
                    </button>
                </div>
            </div>
        );
    }
}

export default AlertSuccessStudy;