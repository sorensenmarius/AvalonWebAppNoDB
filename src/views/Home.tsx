import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import './Home.css'

const Home = () => {
    const history  = useHistory();

    return(
        <div className='home-page-background'>
            <img 
                src="/images/Avalon.png" 
                alt="Avalon" 
                className='home-page-logo center'
            />
            <div className='home-page-buttons-div'>
                <Button onClick={() => history.push("/HostGame")}>Host</Button>
                <Button onClick={() => history.push("/PlayGame")}>Join</Button>
            </div>
        </div>
    )
}

export default Home;