import React, { Component } from 'react';

class NewSignUPMembers extends Component {
    render() {
        return (
                <li>
                    <p className="name">{this.props.name}</p>
                    <p className="dateSignup">{this.props.timesignup}</p>
                </li>
        );
    }
}

export default NewSignUPMembers;