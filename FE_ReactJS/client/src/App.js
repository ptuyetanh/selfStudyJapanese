import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Review from './component/Review';
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Review/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
