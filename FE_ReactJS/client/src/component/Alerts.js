import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
import { alertOff } from './react-redux/actions/alertAction';

class Alerts extends Component {
    clickDismiss = () => {
        this.props.alertOff()
    }
    render() {
        console.log(this.props.alerts.alertshow);
        if (this.props.alerts.alertshow === false) {
            return null
        }
        return (
            <AlertContainer>
                <Alert type="success" onDismiss={() => this.clickDismiss()}>Đăng ký thành công</Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alerts: state.alerts
    }
}
const mapDispatchToProps = {
    alertOff
}
export default connect(mapStateToProps,mapDispatchToProps)(Alerts);