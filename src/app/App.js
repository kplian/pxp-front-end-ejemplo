import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {PrivateRoute} from "./_components/PrivateRoute";
import LoginPage from "./_views/login/LoginPage";
import DashboardPage from "./_views/dashboard/DashboardPage";

function App() {
  return (
      <Router>
        <div>
          <PrivateRoute exact path="/" component={DashboardPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
  );
}

export default App;
