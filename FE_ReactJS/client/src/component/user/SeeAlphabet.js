import React, { Component } from 'react';
import MenuIndex from './MenuIndex';
import AlphabetFree from '../alphabet/AlphabetFree';
import AlphabetLook from '../alphabet/AlphabetLook';
import { connect } from 'react-redux';
import { alphabetLessonShow } from '../react-redux/actions/lessonAction';

class SeeAlphabet extends Component {
    componentDidMount() {
        if (this.props.lesson.alphabetLessonData === null) {
            this.props.alphabetLessonShow()
        }
    }
    alphabetFree = () => {
        if (this.props.lesson.alphabetLessonData !== null) {
            const alphabetLessonFree = this.props.lesson.alphabetLessonData[0]
            return <AlphabetFree lesson = {alphabetLessonFree.name} />
        }
    }
    alphabetLook = () => {
        if (this.props.lesson.alphabetLessonData !== null) {
            const alphabetLessonLook = this.props.lesson.alphabetLessonData.slice(1);
            return alphabetLessonLook.map(value => {
                return <AlphabetLook key={value.lesson_id} lesson = {value.name} example = {value.example}/>
            });
        }
    }
    render() {
        return (
            <main>
                <MenuIndex/>
                <div className="content">
                    <div className="see_alphabet container-fluid">
                        <div className="row">
                            {this.alphabetFree()}
                            {this.alphabetLook()}
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
const mapDispatchToProps =  {
    alphabetLessonShow
}
export default connect(mapStateToProps, mapDispatchToProps)(SeeAlphabet)