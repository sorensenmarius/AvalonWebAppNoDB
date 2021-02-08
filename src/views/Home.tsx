import React from "react";
import { useHistory } from "react-router-dom";

interface IHomeProps {}


const Home = (props: IHomeProps) => {
    const history  = useHistory();

    return(
        <React.Fragment>
            <h1>Velkommen bla bla bla</h1>
            <button onClick={() => history.push("/CreateGame")}>Host</button>
            <button onClick={() => history.push("/JoinGame")}>Join</button>
        </React.Fragment>
    )
}

export default Home;