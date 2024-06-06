import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import LessonFree from '../lesson/LessonFree';
import LessonLook from '../lesson/LessonLook';
import withRouter from '../router/withRouter';
import { connect } from 'react-redux';
import { vocabLessonShow } from '../react-redux/actions/lessonAction';

class SeeVocabLesson extends Component {

    componentDidMount() {
        // const {params} = this.props;
        // console.log(params);
        if(this.props.lesson.vocabLessonData === null) {
            this.props.vocabLessonShow()
        }
    }
    showLessonFree = () => {
        const {params} = this.props;
        if(this.props.lesson.vocabLessonData !== null ) {
            const lessonVocabFree = this.props.lesson.vocabLessonData.find(value => value.level_id === params.id_level);
            if(lessonVocabFree){
                return <LessonFree lesson={lessonVocabFree.lesson_name}/>
            }
        }
    }
    showLessonLook = () => {
        const {params} = this.props;
        if(this.props.lesson.vocabLessonData !== null ) {
            const lessonFree = this.props.lesson.vocabLessonData.findIndex(value => value.level_id === params.id_level)
            const lessonVocabLook =  this.props.lesson.vocabLessonData.filter((value,lessonLook) => value.level_id === params.id_level && lessonLook !== lessonFree);
            return lessonVocabLook.map((value) => {
                return  <LessonLook key={value.level_id} lesson = {value.lesson_name}/>
            })
        }
    }
    render() {
        return (
            <main>
                <MenuIndex />
                <div className="content">
                    <div className="see_vocab_lesson container">
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
    vocabLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SeeVocabLesson))
