import React, { useEffect, useState } from "react";

import "./WaitingForPlayers.css";

import IAvatar, {
  AvatarDefaultSettings,
  randomAvatar,
} from "../Helpers/Avatars/IAvatar";
import {
  accessoriesType,
  clotheType,
  eyebrowType,
  eyeType,
  facialHairType,
  mouthType,
  skinColor,
  topType,
} from "../Helpers/Avatars/AvatarItems";
import IBasicProps from "../../../models/IBasicProps";
import GameHubMethods from "../../../services/GameHubMethods";
import AvatarComponent from "avataaars";
import { Button, Menu, MenuItem } from "@mui/material";

const WaitingForPlayers = ({ game, me, socket }: IBasicProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [avatar, setAvatar] = useState<IAvatar>(randomAvatar());
  const [show, setShow] = useState<boolean[]>(new Array(8).fill(false));

  const options = [
    { name: "topType", values: topType, displayName: "Top" },
    {
      name: "accessoriesType",
      values: accessoriesType,
      displayName: "👓 Accessories",
    },
    {
      name: "facialHairType",
      values: facialHairType,
      displayName: "Facial hair",
    },
    { name: "clotheType", values: clotheType, displayName: "👔 Clothes" },
    { name: "eyeType", values: eyeType, displayName: "👀 Eyes" },
    { name: "eyebrowType", values: eyebrowType, displayName: "✏️ Eyebrow" },
    { name: "mouthType", values: mouthType, displayName: "👄 Mouth" },
    { name: "skinColor", values: skinColor, displayName: "🎨 Skin" },
  ];

  useEffect(() => {
    updateAvatar(avatar);
  }, []);

  const handleClose = (av?: IAvatar) => {
    setShow(new Array(8).fill(false));
    setAnchorEl(null);
    if (av) updateAvatar(av);
  };

  const updateAvatar = (av: IAvatar) => {
    socket.invoke(GameHubMethods.UpdateAvatar, game.id, me.id, av);
  };

  return (
    <div className="home-page-background">
      <div className="ChangeAvatar">
        <h1>Create your Avatar</h1>
        <AvatarComponent
          style={{ width: "200px", height: "200px" }}
          {...AvatarDefaultSettings}
          {...avatar}
        />
        {options.map(
          (
            option: { name: string; values: string[]; displayName: string },
            i: number
          ) => (
            <div className="ButtonClass">
              <Button
                className="ButtonWidth"
                color="primary"
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setAnchorEl(event.currentTarget);
                  let showCopy = show;
                  showCopy[i] = true;
                  setShow(showCopy);
                }}
              >
                {option.displayName}
              </Button>
              <Menu
                id="fade-menu"
                keepMounted
                open={show[i]}
                onClose={() => handleClose()}
                anchorEl={anchorEl}
              >
                {option.values.map((o) => (
                  <MenuItem
                    key={o}
                    onClick={() => {
                      let avatarCopy = avatar as any;
                      avatarCopy[option.name] = o;
                      setAvatar(avatarCopy as IAvatar);
                      handleClose(avatarCopy);
                    }}
                  >
                    {o}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )
        )}
        <div className="ButtonClass">
          <Button
            className="ButtonWidth"
            color="secondary"
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            onClick={() => {
              const randAv = randomAvatar();
              setAvatar(randAv);
              updateAvatar(randAv);
            }}
          >
            🎲 Randomize
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WaitingForPlayers;
