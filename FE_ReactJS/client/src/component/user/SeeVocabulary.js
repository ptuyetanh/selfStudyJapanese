import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import Level from '../level/Level';
import {connect} from 'react-redux';
import { levelShow } from '../react-redux/actions/levelAction';

class SeeVocabulary extends Component {
    componentDidMount() {
        console.log(this.props.level);
        if (this.props.level.seeLevel === null) {
            this.props.levelShow()
        }
    }
    showData = () => {
        if (this.props.level.seeLevel !== null) {
            return this.props.level.seeLevel.map((value,key) => {
                return (
                    <Level key={key} content={value.name} linkTo="/seeVocabulary/seeVocabLesson"/>
                )
            })
        }
    }
    render() {
        return (
            <main>
                <MenuIndex/>
                <div className="content">
                    <div className="see_vocabulary container-fluid">
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
        level: state.level
    }
}
const mapDispatchToProps = {
    levelShow
}

export default connect(mapStateToProps, mapDispatchToProps)(SeeVocabulary)