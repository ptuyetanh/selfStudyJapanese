import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import SeeLevel from './SeeLevel';

class SeeGrammar extends Component {
    render() {
        return (
            <div className='All'>
                <MenuIndex />
                <>
                    <main>
                        <div className="content">
                            <div className="see_grammar container-fluid">
                                <div className="row">
                                    <SeeLevel content="N5" linkTo = '/seeGrammarLesson'/>
                                    <SeeLevel content='N4'/>
                                    <SeeLevel content='N3'/>
                                    <SeeLevel content='N2'/>
                                    <SeeLevel content='N1'/>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* end Main */}
                </>

            </div>
        );
    }
}

export default SeeGrammar;