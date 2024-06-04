import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import LessonFree from '../lesson/LessonFree';
import LessonLook from '../lesson/LessonLook';

class SeeGrammarLesson extends Component {
    render() {
        return (
            <main>
                <MenuIndex/>
                <div className="content">
                    <div className="see_grammar_lesson container">
                        <div className="row">
                            <LessonFree/>
                            <LessonLook />
                            <LessonLook />
                            <LessonLook />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SeeGrammarLesson;