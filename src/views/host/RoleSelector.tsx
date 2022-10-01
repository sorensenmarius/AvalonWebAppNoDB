import { LinearProgress } from "@mui/material";
import React from "react";
import Role from "../../models/enums/Roles";
import "./RoleSelector.css";

interface IRoleSelectorProps {
  roles: number[];
  setRoles: (roles: number[]) => void;
}

const RoleSelector = ({ roles, setRoles }: IRoleSelectorProps) => {
  const [balance, SetBalance] = React.useState(50);
  const [showContent, setShowContent] = React.useState(false);
  const [text, setText] = React.useState("");
  const availableRoles = [
    {
      id: 2,
      imageUrl: "merlin.png",
      value: -25,
      roleInfo:
        "He is on the side of Good. He can see all enemies expcet mordred if he is in the game",
    },
    {
      id: 3,
      imageUrl: "percival.png",
      value: -15,
      roleInfo:
        "He is on the side of Good. Percival's special power is knowledge of Merlin at the star of the game. Using Percival's knowledge wisely is key to protecting Merlin's identity.Adding Percival into a game will make the Good side more pwoerful and win more often.",
    },
    {
      id: 5,
      imageUrl: "morgana.png",
      value: 25,
      roleInfo:
        "She is on the side of evil. Her power is that she appears to be Merlin - revealing herself to Percival as Merlin. Adding Morgana into a game will make the evil side more powerful and win more often.",
    },
    {
      id: 6,
      imageUrl: "mordred.png",
      value: 10,
      roleInfo:
        "He is on the side of Evil. His special pwoer is that his identity is not revealed to Merlin at the start of the game. Adding Mordred into a game will make the Evil side more powerful and win more often.",
    },
    {
      id: 7,
      imageUrl: "assassin.png",
      value: 15,
      roleInfo:
        "He is on the side of Evil. At the end of the game he can snipe Merlin. If he succeds the evil team wins the game!",
    },
    {
      id: 8,
      imageUrl: "oberon.png",
      value: -10,
      roleInfo:
        "He is on the side of Evil. His special power is that he does not reveal himself to the other evil players, nor does he gain knowledge of the other evil players at the start of the game. Oberon is not a minion of mordred and does not open his eyes during the reveal at the start of the game.",
    },
  ];

  const selectRole = (role: number) => {
    const correctRole = availableRoles.find((obj) => {
      return obj.id === role;
    });
    if (roles.includes(role)) {
      if (correctRole) {
        SetBalance(balance - correctRole?.value);
      }
      setRoles(roles.filter((r) => r !== role));
    } else {
      setRoles([...roles, role]);
      if (correctRole) {
        SetBalance(balance + correctRole?.value);
      }
    }
  };
  const handleHover = (roleInfo: string) => {
    setShowContent(true);
    setText(roleInfo ? roleInfo : "");
  };
  const handleClick = (id: number) => {
    selectRole(id);
  };
  return (
    <>
      <h2 className="heading">Choose the roles you want to play with</h2>
      <div className="RoleSelectorContainer">
        {availableRoles.map((r) => (
          <div
            key={r.id}
            className={`role-box ${
              roles.includes(r.id) ? " role-box-checked" : ""
            } ${r.id > 3 ? (r.id === 8 ? "neutral" : "evil") : "good"}`}
            onClick={() => handleClick(r.id)}
            onMouseOver={() => handleHover(r.roleInfo)}
            onMouseLeave={() => setShowContent(false)}
          >
            <img
              className="role-box-image"
              src={"/images/roles/" + r.imageUrl}
              alt={r.imageUrl.split(".")[0]}
            />
            <div style={{ textAlign: "center" }}>{Role[r.id]}</div>
          </div>
        ))}
      </div>
      <div className="infoHolder">{showContent && <p>{text}</p>}</div>
      <div className="BalanceMeterContainer">
        Easy
        <div className="LinearHolder">
          <LinearProgress
            variant="determinate"
            color={balance <= 50 ? "primary" : "secondary"}
            value={balance}
          />
        </div>
        Hard
      </div>
    </>
  );
};

export default RoleSelector;
