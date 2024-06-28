import React, { Component } from 'react';

class RowTableManager extends Component {
    showcourse = () => {
        if (this.props.grammar_id === null) {
            return (
                <p className="course vocab">Từ vựng</p>
            )
        }else {
            return (
                <p className="course grammar">Ngữ pháp</p>
            )
        }
    }
    render() {
        return (
            <tbody>
                <tr>
                    <th scope="row">{this.props.STT + 1}</th>
                    <td>{this.props.name}</td>
                    <td>{this.props.mean}</td>
                    <td>
                        {this.showcourse()}
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default RowTableManager;