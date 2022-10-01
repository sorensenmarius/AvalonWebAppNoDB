import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import PlayGame from "./views/client/PlayGame";
import HostGame from "./views/host/HostGame";
import { GlobalSnackbar, SnackbarProvider } from "./hooks/useGlobalSnackbar";

const App = () => {
  return (
    <SnackbarProvider>
      <GlobalSnackbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/HostGame" component={HostGame} />
          <Route path="/PlayGame" component={PlayGame} />
        </Switch>
      </BrowserRouter>
    </SnackbarProvider>
  );
};

export default App;
