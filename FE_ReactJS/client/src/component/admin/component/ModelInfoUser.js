import React, { Component } from 'react';
import moment from 'moment';

class ModelInfoUser extends Component {
    render() {
        const dateofbirth = this.props.dateofbirth;
        const dateofbirthVN = moment(dateofbirth).utcOffset(7).format('YYYY-MM-DD');
        const start_day = moment(this.props.start_day).utcOffset(7).format('YYYY-MM-DD');
        const expiration_date = moment(this.props.expiration_date).utcOffset(7).format('YYYY-MM-DD');
        return (
            <div className="modal" tabIndex={-1} id="userInfo">
                <div className="modal-dialog  modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thông tin chi tiết</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>{'Họ và tên: ' + this.props.fullname}</li>
                                <li>{'Số điện thoại: ' + this.props.phonenumber }</li>
                                <li>{'Ngày sinh: '+ dateofbirthVN}</li>
                                <li>{'Ngày bắt đầu member: ' + start_day}</li>
                                <li>{'Ngày hết hạn member: ' + expiration_date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ModelInfoUser;