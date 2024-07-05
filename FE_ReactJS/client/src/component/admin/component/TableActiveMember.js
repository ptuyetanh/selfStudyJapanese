import React, { Component } from 'react';

class TableActiveMember extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.fullname}</td>
                <td>{this.props.timestudy}</td>
                <td>
                    <img
                        data-bs-toggle="modal"
                        data-bs-target="#paymentPhoto"
                        src={'/images/' + this.props.paymentphoto}
                        className="img-fluid rounded-top"
                        alt=""
                        onClick={this.props.clickPaymentPhoto}
                    />

                </td>
                <td className="action">
                    <button
                        data-bs-toggle="modal"
                        data-bs-target="#activeMember"
                        className="btn btn-primary"
                        onClick={this.props.clickButtonActiveMember}
                    >
                        Kích hoạt
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary refuseMember"
                        onClick={this.props.clickButtonRefuse}
                    >
                        Từ chối
                    </button>
                </td>
            </tr>
        );
    }
}

export default TableActiveMember;