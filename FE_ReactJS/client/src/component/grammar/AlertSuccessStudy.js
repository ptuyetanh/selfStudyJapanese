import React, { Component } from 'react';

class AlertSuccessStudy extends Component {
    render() {
        return (
            <div className="alerts alertSuccess">
                <h2>Đáp án đúng</h2>
                <div className="alert">
                    <div className="contentAlert">
                        <p>います : có...(sở hữu)</p>
                        <p>私は猫が二います :Tôi có 2 con mèo</p>
                    </div>
                    <a
                        name=""
                        id=""
                        className="btn btn-primary continue"
                        href="#"
                        role="button"
                    >
                        Tiếp tục
                    </a>
                </div>
            </div>
        );
    }
}

export default AlertSuccessStudy;