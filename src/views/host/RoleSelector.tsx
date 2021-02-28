import React, { useState } from 'react';
import Role from "../../models/enums/Roles";
import Game from "../../models/Game";
import "./RoleSelectorStyling.css"
interface IRoleSelectorProps {
    game?: Game
    roles: number[]
    setRoles: (roles: number[]) => void
}

const RoleSelector = ({ game, roles, setRoles }: IRoleSelectorProps) => {
    const [showContent, setShowContent] = React.useState(false);
    const [text, setText] = React.useState("");
    const availableRoles = [{
        id: 2, imageUrl: "MerlinNy.png", roleInfo: "He is on the side of Good. He can see all enemies expcet mordred if he is in the game"
    }, {
        id: 3, imageUrl: "visored-helm.png", roleInfo: "He is on the side of Good. Percival's special power is knowledge of Merlin at the star of the game. Using Percival's knowledge wisely is key to protecting Merlin's identity.Adding Percival into a game will make the Good side more pwoerful and win more often."
    }, {
        id: 5, imageUrl: "crowned-skull (2).png", roleInfo: "She is on the side of evil. Her power is that she appears to be Merlin - revealing herself to Percival as Merlin. Adding Morgana into a game will make the evil side more powerful and win more often."
    }, {
        id: 6, imageUrl: "Mordred.png", roleInfo: "He is on the side of Evil. His special pwoer is that his identity is not revealed to Merlin at the start of the game. Adding Mordred into a game will make the Evil side more powerful and win more often."
    }, {
        id: 7, imageUrl: "executioner-hood.png", roleInfo: "He is on the side of Evil. At the end of the game he can snipe Merlin. If he succeds the evil team wins the game!"
    }, {
        id: 8, imageUrl: "goblin-head.png", roleInfo: "He is on the side of Evil. His special power is that he does not reveal himself to the other evil players, mor does he gain knowledge of the other evil players at the start of the game. Oberon is not a minion of mordred and does not open his eyes during the reveal at the start of the game. Adding Oberon into a game will make the good side more powerful and win more often"
    }];

    const selectRole = (role: number) => {
        if (roles.includes(role)) {
            setRoles(roles.filter(r => r !== role))
        } else {
            setRoles([...roles, role])
        }
    }
    const handleHover = (roleInfo: string, id: number) => {
        console.log("testing")
        setShowContent(true)
        setText(roleInfo ? roleInfo : "")
    }
    const handleClick = (id: number) => {
        selectRole(id)
    }

    return (
        <>
            <h2 className="heading">Click på rollene du ønsker å ha med i spillet</h2>
            <div className="RoleSelectorContainer">
                {availableRoles.map(r => (
                    <div key={r.id}
                        className={roles.includes(r.id) ? "roleBoxChecked" : "roleBox"}
                        onClick={() => handleClick(r.id)}
                        onMouseOver={() => handleHover(r.roleInfo, r.id)}
                        onMouseLeave={() => setShowContent(false)}>
                        <img src={r.imageUrl} width="100%" height="100%" alt="" />
                        {Role[r.id]}
                    </div>
                ))}
            </div>
            {
                showContent && (
                    <div className="infoHolder" >
                        {text}
                    </div>
                )
            }
        </>
    )
}

export default RoleSelector;