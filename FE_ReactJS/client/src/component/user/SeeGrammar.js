import React, { Component } from 'react';
import SeeLevel from './SeeLevel';
import MenuIndex from './MenuIndex';

class SeeGrammar extends Component {
    render() {
        return (
            <main>
                <MenuIndex/>
                <div className="content">
                    <div className="see_grammar container-fluid">
                        <div className="row">
                            <SeeLevel content="N5" linkTo='/seeGrammar/seeGrammarLesson' />
                            <SeeLevel content='N4' />
                            <SeeLevel content='N3' />
                            <SeeLevel content='N2' />
                            <SeeLevel content='N1' />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SeeGrammar;