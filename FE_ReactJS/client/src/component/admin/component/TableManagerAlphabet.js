import React, { Component } from 'react';

class TableManagerAlphabet extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>あ</td>
                <td>a</td>
                <td>
                    あめ(雨) mưa
                </td>
                <td>あ.mp3</td>
                <td>1 Gojuuon</td>
                <td>
                    hiragana
                </td>
                <td className="action">
                    {/* <i
                        className="fa-solid fa-user-pen"
                        data-bs-toggle="modal"
                        data-bs-target="#userEdit"
                        onClick={this.props.clickIconEdit}
                    /> */}
                    <i className="fa-solid fa-user-xmark" onClick={this.props.clickIconDelete}/>
                </td>
            </tr>
        );
    }
}

export default TableManagerAlphabet;