import React, { Component } from 'react';

class TableManagerCommunication extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.lesson_name}</td>
                <td>{this.props.sound_shadowing}</td>
                <td>{this.props.mean_shadowing}</td>
                <td className="action">
                    <i className="fa-solid fa-circle-info" data-bs-toggle="modal"
                        data-bs-target="#communicationInfo" onClick={this.props.clickIconInfo}></i>
                    <i className="fa-solid fa-delete-left" onClick={this.props.clickIconDelete}></i>
                </td>
            </tr>
        );
    }
}

export default TableManagerCommunication;