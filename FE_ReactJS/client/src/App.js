import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Review from './component/user/Review';
import SignUp from './component/user/SignUp';
import LogIn from './component/user/LogIn';
import SeeAlphabet from './component/user/SeeAlphabet';
import SeeVocabulary from './component/user/SeeVocabulary';
import SeeVocabLesson from './component/user/SeeVocabLesson';
import SeeGrammar from './component/user/SeeGrammar';
import SeeGrammarLesson from './component/user/SeeGrammarLesson';
import SeeCommunication from './component/user/SeeCommunication';
import MenuIndex from './component/user/MenuIndex';
class App extends Component {
  render() {
    return (
      <Router>
        <MenuIndex/>
        <Routes>
          <Route exact path='/' element={<Review/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/seeAlphabet' element={<SeeAlphabet/>}/>
          <Route exact path='/seeVocabulary' element={<SeeVocabulary/>}/>
          <Route path='/seeVocabulary/seeVocabLesson' element={<SeeVocabLesson/>}/>
          <Route path='/seeGrammar' element={<SeeGrammar/>}/>
          <Route path='/seeGrammar/seeGrammarLesson' element={<SeeGrammarLesson/>}/>
          <Route path='/seeCommunication' element={<SeeCommunication/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
