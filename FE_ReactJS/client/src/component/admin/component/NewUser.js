import React, { Component } from 'react';

class NewUser extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}

export default NewUser;