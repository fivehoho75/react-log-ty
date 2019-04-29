import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Home, NotFound } from 'pages';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
