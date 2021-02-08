import React, { useEffect, useState } from 'react';
import './App.css';
import { HubConnection } from '@microsoft/signalr';
import { setupSocket } from './sockets/GameHubUtils';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import PlayGame from './views/client/PlayGame';
import HostGame from './views/host/HostGame';


const App = () => {
  const [gameHub, setGameHub] = useState<HubConnection>()

  useEffect(() => {
    setGameHub(setupSocket());
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/HostGame" component={HostGame} />

        <Route path="/PlayGame" component={PlayGame} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
