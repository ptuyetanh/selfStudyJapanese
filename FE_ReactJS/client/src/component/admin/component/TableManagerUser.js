import React, { Component } from 'react';

class TableManagerUser extends Component {
    showNameRole = () => {
        if (this.props.role_name === 'user') {
            return (
                <p className="roleUser">user</p>
            )
        }else if (this.props.role_name === 'member'){
            return (
                <p className="roleMember">member</p>
            )
        }else if (this.props.role_name === 'admin'){
            return (
                <p className="roleAdmin">admin</p>
            )
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.fullname}</td>
                <td>{this.props.email}</td>
                <td>
                    {this.showNameRole()}
                </td>
                <td className="action">
                    <i
                        className="fa-solid fa-user-pen"
                        data-bs-toggle="modal"
                        data-bs-target="#userEdit"
                        onClick={this.props.clickIconEdit}
                    />
                    <i className="fa-solid fa-user-xmark" onClick={this.props.clickIconDelete}/>
                    <i
                        className="fa-solid fa-circle-info"
                        data-bs-toggle="modal"
                        data-bs-target="#userInfo"
                        onClick={this.props.clickIconInfo}
                    />
                </td>
            </tr>
        );
    }
}

export default TableManagerUser;