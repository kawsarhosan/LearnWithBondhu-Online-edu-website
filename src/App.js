
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Instructors from './Components/Instructors/Instructors';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <div className='my-5'>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route path='/instructors'>
            <Instructors></Instructors>
          </Route>
        </Switch>
        </div>
        <Footer></Footer>
      </Router>
      
      
      
    
    </div>
  );
}

export default App;
