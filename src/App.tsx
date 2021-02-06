import React, { useEffect, useState } from 'react';
import './App.css';
import { HubConnection } from '@microsoft/signalr';
import { setupSocket } from './sockets/GameHubUtils';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import JoinGame from './views/client/JoinGame';
import CreateGame from './views/host/CreateGame';


const App = () => {
  const [gameHub, setGameHub] = useState<HubConnection>()

  useEffect(() => {
    setGameHub(setupSocket());
  }, [])

  const sendMessage = () => {
    gameHub?.invoke("SendMessage", "This is a message")
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />

        {/* HOST ROUTES */}
        <Route path="/CreateGame" component={CreateGame} />
        {/* CLIENT ROUTES */}
        <Route path="/JoinGame" component={JoinGame} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
