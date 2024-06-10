import React, { Component } from 'react';
import MenuHome from './MenuHome';
import { connect } from 'react-redux';
import { isAuthUser } from '../react-redux/actions/authAction';
import { logOutUser } from '../react-redux/actions/logOutAction';
import { Navigate } from 'react-router-dom';
import { levelShow } from '../react-redux/actions/levelAction';
import Level from '../level/Level';

class SeeGrammarPrivate extends Component {
    componentDidMount() {
        this.props.isAuthUser();
        if (this.props.level.seeLevel === null) {
            this.props.levelShow()
        }
    }

    logOutButton = () => {
        this.props.logOutUser();
        window.location.href = '/login'
    }

    showData = () => {
        if (this.props.level.seeLevel !== null) {
            return this.props.level.seeLevel.map((value) => {
                return (
                    <Level key={`grammar-${value.level_id}`} see = '/seeGrammarUser/' content={value.name} levelID={value.level_id}/>
                )
            })
        }
    }
    render() {
        const {user} = this.props.auth;
        const {isNavigateLogOut} = this.props.logOut;
        if (isNavigateLogOut) {
            return <Navigate to="/login" />
        }
        return (
            <main>
                <MenuHome fullname = {user.fullname} logout = {this.logOutButton}/>
                <div className="content">
                    <div className="see_grammar container-fluid">
                        <div className="row">
                            {this.showData()}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        logOut: state.logOut,
        level: state.level
    }
}
const mapDispatchToProps = {
    isAuthUser,
    logOutUser,
    levelShow
}
export default connect(mapStateToProps, mapDispatchToProps)(SeeGrammarPrivate);