import React, { Component } from 'react';

class AlertSuccessStudy extends Component {
    render() {
        return (
            <div className="alerts alertSuccess">
                <h2>Đáp án đúng</h2>
                <div className="alert">
                    <div className="contentAlert">
                        <p>学生(がくせい) : Học sinh</p>
                        <p>私は学生です :Tôi là học sinh</p>
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