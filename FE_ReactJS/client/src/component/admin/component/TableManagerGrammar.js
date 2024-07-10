import React, { Component } from 'react';

class TableManagerGrammar extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.mean}</td>
                <td>{this.props.example}</td>
                {/* <td>
                    {this.props.sound}
                </td> */}
                <td className="lessoncourse">{this.props.lesson_name}</td>
                <td className="levelcoures">{this.props.level_name}</td>
                <td className="action">
                    <i className="fa-solid fa-circle-info" data-bs-toggle="modal"
                        data-bs-target="#grammarInfo" onClick={this.props.clickIconInfo}></i>
                    <i className="fa-solid fa-delete-left" onClick={this.props.clickIconDelete}></i>
                </td>
            </tr>
        );
    }
}

export default TableManagerGrammar;