import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';

// import Home from './components/home';
import About from './components/about';
// import LoginOrSignup from './components/loginorsignup';
// import UserLogin from './components/user_login';
// import UserSignup from './components/user_signup';
// import UserHome from './components/user_home';
// import AddCourse from './components/add_course';
// import ViewCourses from './components/view_courses';
// import UpdateCourse from './components/update_course';
// import DeleteCourse from './components/delete_course';
import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route path="/about" component={About} />
        <Route component={NotFound}/>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/login" component={LoginOrSignup} /> */}
        {/* <Route path="/user_login" component={UserLogin} />
        <Route path="/user_signup" component={UserSignup} />
        <Route path="/user_home" component={UserHome} />
        <Route path="/add_course" component={AddCourse} />
        <Route path="/view_courses" component={ViewCourses} />
        <Route path="/update_course" component={UpdateCourse} />
        <Route path="/delete_course" component={DeleteCourse} /> */}
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
