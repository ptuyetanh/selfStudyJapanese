import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
import { alertDangerOff } from '../react-redux/actions/alertAction';

class AlertDanger extends Component {
    clickDismiss = () => {
        this.props.alertDangerOff()
    }
    render() {
        if(this.props.alerts.alertDangerShow === false){
            return null;
        };
        return (
            <AlertContainer>
                <Alert type='danger' onDismiss={() => this.clickDismiss()} timeout={9000}>{this.props.alertContent}</Alert>
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
    alertDangerOff
}
export default connect(mapStateToProps,mapDispatchToProps)(AlertDanger);