import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    const history  = useHistory();

    return(
        <React.Fragment>
            <h1>Velkommen bla bla bla</h1>
            <Button onClick={() => history.push("/HostGame")}>Host</Button>
            <Button onClick={() => history.push("/PlayGame")}>Join</Button>
        </React.Fragment>
    )
}

export default Home;