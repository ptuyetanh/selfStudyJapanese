import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import LessonFree from '../lesson/LessonFree';
import LessonLook from '../lesson/LessonLook';
import { connect } from 'react-redux';
import withRouter from '../router/withRouter';
import { grammarLessonShow } from '../react-redux/actions/lessonAction';

class SeeGrammarLesson extends Component {
    componentDidMount() {
        if (this.props.lesson.grammarLessonData === null) {
            this.props.grammarLessonShow()
        }
    }
    showLessonFree = () => {
        const {params} = this.props;
        if(this.props.lesson.grammarLessonData !== null ) {
            const lessonGrammarFree = this.props.lesson.grammarLessonData.find(value => value.level_id === params.id_level);
            if(lessonGrammarFree){
                return <LessonFree linkto='/login' lesson={lessonGrammarFree.lesson_name}/>
            }
        }
    }
    showLessonLook = () => {
        const {params} = this.props;
        if(this.props.lesson.grammarLessonData !== null ) {
            const lessonFree = this.props.lesson.grammarLessonData.findIndex(value => value.level_id === params.id_level)
            const lessonGrammarLook =  this.props.lesson.grammarLessonData.filter((value,lessonLook) => value.level_id === params.id_level && lessonLook !== lessonFree);
            return lessonGrammarLook.map((value) => {
                return  <LessonLook key={value.level_id} lesson = {value.lesson_name}/>
            })
        }
    }
    render() {
        return (
            <main>
                <MenuIndex/>
                <div className="content">
                    <div className="see_grammar_lesson container">
                        <div className="row">
                            {this.showLessonFree()}
                            {this.showLessonLook()}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        lesson: state.lesson
    }
}
const mapDispatchToProps = {
    grammarLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SeeGrammarLesson))