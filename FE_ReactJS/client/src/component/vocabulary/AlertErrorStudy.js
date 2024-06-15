import React, { Component } from 'react';

class AlertErrorStudy extends Component {
    render() {
        return (
            <div className="alerts alertError ">
                <h2>Đáp án sai</h2>
                <div className="alert">
                    <div className="contentAlert">
                        <p>学生(がくせい) : Học sinh</p>
                        <p>私は学生です :Tôi là học sinh</p>
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