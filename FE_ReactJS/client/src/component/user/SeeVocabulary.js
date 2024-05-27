import React, { Component } from 'react';
import SeeLevel from './SeeLevel';

class SeeVocabulary extends Component {
    render() {
        return (
            <main>
                <div className="content">
                    <div className="see_vocabulary container-fluid">
                        <div className="row">
                            <SeeLevel content="N5" linkTo="/seeVocabulary/seeVocabLesson" />
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

export default SeeVocabulary;