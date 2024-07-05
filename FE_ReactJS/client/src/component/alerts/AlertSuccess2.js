import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertSuccessOff2 } from '../react-redux/actions/alertAction';
import { Alert, AlertContainer } from 'react-bs-notifier';

class AlertSuccess2 extends Component {
    clickDismiss = () => {
        this.props.alertSuccessOff2()
    }
    render() {
        if (this.props.alerts.alertSuccess2Show === false) {
            return null
        }
        return (
            <AlertContainer>
                <Alert type="success" onDismiss={() => this.clickDismiss()} timeout={9000}>{this.props.alertContent}</Alert>
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
    alertSuccessOff2
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertSuccess2);