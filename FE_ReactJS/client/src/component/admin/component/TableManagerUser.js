import React, { Component } from 'react';

class TableManagerUser extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="col-xl-1" scope="col">
                            STT
                        </th>
                        <th className="col-xl-3" scope="col">
                            Họ và tên
                        </th>
                        <th className="col-xl-4" scope="col">
                            Email
                        </th>
                        <th className="col-xl-1" scope="col">
                            Vai trò
                        </th>
                        <th className="col-xl-3" scope="col">
                            Hoạt động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.stt}</td>
                        <td>{this.props.fullname}</td>
                        <td>{this.props.email}</td>
                        <td>
                            <p className="roleAdmin">Admin</p>
                            {/* <p class="roleUser">User</p>
                                          <p class="roleMember">Member</p> */}
                        </td>
                        <td className="action">
                            <i
                                className="fa-solid fa-user-pen"
                                data-bs-toggle="modal"
                                data-bs-target="#userEdit"
                            />
                            <i className="fa-solid fa-user-xmark" />
                            <i
                                className="fa-solid fa-circle-info"
                                data-bs-toggle="modal"
                                data-bs-target="#userInfo"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

        );
    }
}

export default TableManagerUser;