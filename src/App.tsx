// Modules
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import { Lobby } from 'Components/Lobby';
import { Room } from 'Components/Room';
import { Nav } from 'Components/Nav';

// Store
import store from 'Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Router>
        <Switch>
          <Route path="/lobby" component={Lobby} />
          <Route path="/room" component={Room} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
