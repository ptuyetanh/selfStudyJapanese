import React, { Component } from 'react';

class AlertSuccessStudy extends Component {
    render() {
        return (
            <div className="alerts alertSuccess">
                <h2>Đáp án đúng</h2>
                <div className="alert">
                    <div className="contentAlert">
                        <p>{this.props.name+ '('+this.props.pronunciation +') : '+ this.props.mean}</p>
                        <p>{this.props.example + ':' + this.props.example_mean}</p>
                    </div>
                    <button
                        name=""
                        id=""
                        className="btn btn-primary continue"
                        onClick={this.props.howtolearnNext}
                    >
                        Tiếp tục
                    </button>
                </div>
            </div>
        );
    }
}

export default AlertSuccessStudy;