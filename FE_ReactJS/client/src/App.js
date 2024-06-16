import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Review from './component/user/Review';
import SignUp from './component/user/SignUp';
import LogIn from './component/user/LogIn';
import SeeAlphabet from './component/user/SeeAlphabet';
import SeeVocabulary from './component/user/SeeVocabulary';
import SeeVocabLesson from './component/user/SeeVocabLesson';
import SeeGrammar from './component/user/SeeGrammar';
import SeeGrammarLesson from './component/user/SeeGrammarLesson';
import SeeCommunication from './component/user/SeeCommunication';
import Home from './component/user/Home';
import RoutePrivate from './component/router/RoutePrivate';
import { connect } from 'react-redux';
import { isAuthUser } from './component/react-redux/actions/authAction';
import SeeAphabetPrivate from './component/user/SeeAphabetPrivate';
import SeeComunicationPrivate from './component/user/SeeComunicationPrivate';
import SeeVocabPrivate from './component/user/SeeVocabPrivate';
import SeeVocabLessonPrivate from './component/user/SeeVocabLessonPrivate';
import SeeGrammarPrivate from './component/user/SeeGrammarPrivate';
import SeeGrammarLessonPrivate from './component/user/SeeGrammarLessonPrivate';
import AlphabetLessonContent from './component/user/AlphabetLessonContent';
import StudyAlphabetUser from './component/user/StudyAlphabetUser';
import StudyCommunicationUser from './component/user/StudyCommunicationUser';
import VocabLessonContent from './component/user/VocabLessonContent';
import StudyVocabUser from './component/user/StudyVocabUser';
class App extends Component {
  componentDidMount() {
    this.props.isAuthUser()
  }
  
  render() {
    console.log(this.props.auth);
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Review />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/seeAlphabet' element={<SeeAlphabet />} />
          <Route exact path='/seeVocabulary' element={<SeeVocabulary />} />
          <Route path='/seeVocabulary/:level/:id_level' element={<SeeVocabLesson />} />
          <Route path='/seeGrammar' element={<SeeGrammar />} />
          <Route path='/seeGrammar/:level/:id_level' element={<SeeGrammarLesson />} />
          <Route path='/seeCommunication' element={<SeeCommunication />} />
          <Route element={<RoutePrivate />}>
            <Route path='/home' element={<Home />} />
            <Route path='/seeAlphabetUser' element={<SeeAphabetPrivate />} />
            <Route path='/seeCommunicationUser' element={<SeeComunicationPrivate />} />
            <Route path='/seeVocabUser' element={<SeeVocabPrivate />} />
            <Route path='/seeVocabUser/:level/:id_level' element={<SeeVocabLessonPrivate />} />
            <Route path='/seeGrammarUser' element={<SeeGrammarPrivate />} />
            <Route path='/seeGrammarUser/:level/:id_level' element={<SeeGrammarLessonPrivate />} />
            <Route path='/seeAlphabetUser/:Lesson/:id_lesson' element={<AlphabetLessonContent />} />        
            <Route path='/seeAlphabetUser/:Lesson/:id_lesson/:content/study' element={<StudyAlphabetUser />} />        
            <Route path='/seeCommunicationUser/:Lesson/:id_lesson/study' element={<StudyCommunicationUser />} />
            <Route path='/seeVocabUser/:level/:id_level/:lesson_name' element={<VocabLessonContent />} />        
            <Route path='/seeVocabUser/:level/:id_level/:lesson_name/study' element={<StudyVocabUser />} />        
          </Route>
        </Routes>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = {
  isAuthUser
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
