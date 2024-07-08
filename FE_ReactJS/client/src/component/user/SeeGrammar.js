import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import Level from '../level/Level';
import { connect } from 'react-redux';
import { levelShow } from '../react-redux/actions/levelAction';

class SeeGrammar extends Component {
    componentDidMount() {
        if (this.props.level.seeLevel === null) {
            this.props.levelShow()
        }
    }
    showData = () => {
        if (this.props.level.seeLevel !== null) {
            return this.props.level.seeLevel.map((value) => {
                return (
                    <Level key={`grammar-${value.level_id}`} see = '/seeGrammar/' content={value.level_name} levelID={value.level_id}/>
                )
            })
        }
    }
    render() {
        return (
            <main>
                <MenuIndex/>
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
        level: state.level
    }
}
const mapDispatchToProps = {
    levelShow
}
export default connect(mapStateToProps, mapDispatchToProps)(SeeGrammar)