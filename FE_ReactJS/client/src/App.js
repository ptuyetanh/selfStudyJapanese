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
import GrammarLessonContent from './component/user/GrammarLessonContent';
import StudyGrammarUser from './component/user/StudyGrammarUser';
import SignUpMember from './component/user/SignUpMember';
import HomeMember from './component/member/HomeMember';
import SeeAlphabetMember from './component/member/SeeAlphabetMember';
import AlphabetLessonContentM from './component/member/AlphabetLessonContentM';
import StudyAlphabetMember from './component/member/StudyAlphabetMember';
import SeeCommunicationMember from './component/member/SeeCommunicationMember';
import StudyCommunicationMember from './component/member/StudyCommunicationMember';
import SeeVocabMember from './component/member/SeeVocabMember';
import SeeVocabLessonM from './component/member/SeeVocabLessonM';
import VocabLessonContentM from './component/member/VocabLessonContentM';
import StudyVocabMember from './component/member/StudyVocabMember';
import SeeGrammarMember from './component/member/SeeGrammarMember';
import SeeGrammarLessonMember from './component/member/SeeGrammarLessonMember';
import GrammarLessonContentM from './component/member/GrammarLessonContentM';
import StudyGrammarMember from './component/member/StudyGrammarMember';
import ManagerLearnedWords from './component/member/ManagerLearnedWords';
import Dashboard from './component/admin/Dashboard';
import ManagerUser from './component/admin/ManagerUser';
class App extends Component {
  componentDidMount() {
    this.props.isAuthUser()
  }
  
  render() {
    // console.log(this.props.auth);
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
            {/* user */}
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
            <Route path='/seeGrammarUser/:level/:id_level/:lesson_name' element={<GrammarLessonContent />} />       
            <Route path='/seeGrammarUser/:level/:id_level/:lesson_name/study' element={<StudyGrammarUser />} />       
            <Route path='/signUpMember' element={<SignUpMember />} />
            {/* member */}
            <Route path='/homeMember' element={<HomeMember />} />
            <Route path='/seeAlphabetMember' element={<SeeAlphabetMember />} />
            <Route path='/seeAlphabetMember/:lesson/:id_lesson' element={<AlphabetLessonContentM />} />
            <Route path='/seeAlphabetMember/:lesson/:id_lesson/:content/study' element={<StudyAlphabetMember />} />
            <Route path='/seeCommunicationMember' element={<SeeCommunicationMember />} />
            <Route path='/seeCommunicationMember/:lesson/:id_lesson/study' element={<StudyCommunicationMember />} />
            <Route path='/seeVocabMember' element={<SeeVocabMember />} />
            <Route path='/seeVocabMember/:level/:id_level' element={<SeeVocabLessonM />} />
            <Route path='/seeVocabMember/:level/:id_level/:lesson_name' element={<VocabLessonContentM />} />
            <Route path='/seeVocabMember/:level/:id_level/:lesson_name/study' element={<StudyVocabMember />} />
            <Route path='/seeGrammarMember' element={<SeeGrammarMember />} />
            <Route path='/seeGrammarMember/:level/:id_level' element={<SeeGrammarLessonMember />} />
            <Route path='/seeGrammarMember/:level/:id_level/:lesson_name' element={<GrammarLessonContentM />} />
            <Route path='/seeGrammarMember/:level/:id_level/:lesson_name/study' element={<StudyGrammarMember />} />
            <Route path='/homeMember/managerLearnedWords' element={<ManagerLearnedWords />} />
            {/* admin */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/manageruser' element={<ManagerUser />} />
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
