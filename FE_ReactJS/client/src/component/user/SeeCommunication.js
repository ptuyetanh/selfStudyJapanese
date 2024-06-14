import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import LessonFree from '../lesson/LessonFree';
import LessonLook from '../lesson/LessonLook';
import { connect } from 'react-redux';
import { communicationLessonShow } from '../react-redux/actions/lessonAction';

class SeeCommunication extends Component {
    componentDidMount() {
        if (this.props.lesson.communicationLessonData === null) {
            this.props.communicationLessonShow()
        }
    }
    lessonFree = () => {
        if (this.props.lesson.communicationLessonData !== null) {
            const lessonComFree = this.props.lesson.communicationLessonData[0];
            return <LessonFree linkto='/login' lesson={lessonComFree.lesson_name} />
        }
    }
    lessonLook = () => {
        if (this.props.lesson.communicationLessonData !== null) {
            const lessonComLook = this.props.lesson.communicationLessonData.slice(1);
            return lessonComLook.map(value => {
                return (
                    <LessonLook key={value.communication_id} lesson={value.lesson_name}/>
                )
            })
        }
    }
    render() {
        return (
            <main>
                <MenuIndex />
                <div className="content">
                    <div className="see_communication_lesson container">
                        <div className="row">
                            {this.lessonFree()}
                            {this.lessonLook()}
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
    communicationLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(SeeCommunication)