import React, { Component } from 'react';

class TableManagerAlphabet extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.pronunciation}</td>
                <td>
                    {this.props.example}
                </td>
                <td>{this.props.sound}</td>
                <td className="type_alphabet">{this.props.type}</td>
                <td className="lesson_name_alphabet">
                    {this.props.lesson_name}
                </td>
                <td className="action">
                    <i className="fa-solid fa-delete-left" onClick={this.props.
                    clickIconDelete}></i>
                </td>
            </tr>
        );
    }
}

export default TableManagerAlphabet;