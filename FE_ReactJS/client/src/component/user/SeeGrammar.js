import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import Level from '../level/Level';
import { connect } from 'react-redux';
import { levelShow } from '../react-redux/actions/levelAction';

class SeeGrammar extends Component {
    render() {
        return (
            <main>
                <MenuIndex/>
                <div className="content">
                    <div className="see_grammar container-fluid">
                        <div className="row">
                            <Level content="N5" linkTo='/seeGrammar/seeGrammarLesson' />
                            <Level content='N4' />
                            <Level content='N3' />
                            <Level content='N2' />
                            <Level content='N1' />
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