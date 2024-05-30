import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
import { alertSuccessOff } from '../react-redux/actions/alertAction';


class AlertSuccess extends Component {
    clickDismiss = () => {
        this.props.alertSuccessOff()
    }
    render() {
        if (this.props.alerts.alertSuccessShow === false) {
            return null
        }
        return (
            <AlertContainer>
                <Alert type={this.props.alertType} onDismiss={() => this.clickDismiss()} timeout={9000}>{this.props.alertContent}</Alert>
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
    alertSuccessOff
}
export default connect(mapStateToProps,mapDispatchToProps)(AlertSuccess);