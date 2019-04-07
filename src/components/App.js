import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import Login from './login';
import Register from './register';
import Candidate from './candidate';
import Recruiter from './recruiter';
import CreateJob from './createJob';

const App = () => {
    return(
        <div className="ui container">
        <BrowserRouter>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/candidate" exact component={Candidate}/>
            <Route path="/recruiter" exact component={Recruiter}/>
            <Route path="/createJob" exact component={CreateJob}/>
        </BrowserRouter>
        </div>
    );
}

export default App;