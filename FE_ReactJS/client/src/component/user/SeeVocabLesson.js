import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import SeeLesson from './SeeLesson';

class SeeVocabLesson extends Component {
    render() {
        return (
            <div className='All'>
                <MenuIndex />
                <>
                    <main>
                        <div className="content">
                            <div className="see_vocab_lesson container">
                                <div className="row">
                                    <div className="col-10">
                                        <div className="d-grid gap-2 mb-3">
                                            <button type="button" name="" id="" className="btn btn-primary">
                                                <h2>1.</h2>
                                                <h2>はじめまして</h2>
                                                <h3>Học thử miễn phí</h3>
                                            </button>
                                        </div>
                                    </div>
                                    <SeeLesson/>
                                    <SeeLesson/>
                                    <SeeLesson/>
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

export default SeeVocabLesson;