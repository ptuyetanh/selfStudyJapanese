import React, { Component } from 'react';

class AlertErrorStudy extends Component {
    render() {
        return (
            <div className="alerts alertError ">
                <h2>Đáp án sai</h2>
                <div className="alert">
                    <div className="contentAlert">
                        <p>います : có...(sở hữu)</p>
                        <p>私は猫が二います :Tôi có 2 con mèo</p>
                    </div>
                    <a
                        name=""
                        id=""
                        className="btn btn-primary learnAgain"
                        href="#"
                        role="button"
                    >
                        Học lại
                    </a>
                </div>
            </div>
        );
    }
}

export default AlertErrorStudy;