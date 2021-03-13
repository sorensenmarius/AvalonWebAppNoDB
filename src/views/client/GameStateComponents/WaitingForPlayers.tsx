import React from 'react';
import IGameProp from "../../../models/IGameProp";
import Avatar from 'avataaars'
import { Button, Menu, MenuItem } from "@material-ui/core";

import "./WaitingForPlayers.css"
const topOptions = [
    'NoHair',
    'Eyepatch',
    'Hat',
    'Hijab',
    'Turban',
    'WinterHat1',
    'WinterHat2',
    'WinterHat3',
    'WinterHat4',
];
const accessories = [
    'Blank',
    'Kurt',
    'Round',
    'Sunglasses',
    'Wayfarers',
];
const facialHair = [
    'Blank',
    'BeardMedium',
    'BeardLight',
    'BeardMajestic',
];
const cloths = [
    'BlazerShirt',
    'Hoodie',
];
const eye = [
    'Default',
    'Side',
    'Squint',
];
const eyebrows = [
    'Default',
    'Angry',
    'UpDown',
];
const mouth = [
    'Default',
    'Sad',
    'Vomit',
];
const skin = [
    'Light',
    'Black',
];



const WaitingForPlayers = ({ game }: IGameProp) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [showTop, setShowTop] = React.useState(false);
    const [showAcc, setShowAcc] = React.useState(false);
    const [showFC, setShowFC] = React.useState(false);
    const [showCloth, setShowCloth] = React.useState(false);
    const [showEye, setShowEye] = React.useState(false);
    const [showEyeB, setShowEyeB] = React.useState(false);
    const [showMouth, setShowMouth] = React.useState(false);
    const [showSkin, setShowSkin] = React.useState(false);

    const [topOption, setTopOption] = React.useState("");
    const [accOption, setAccOption] = React.useState("");
    const [fcOption, setFCOption] = React.useState("");
    const [clothOption, setClothOption] = React.useState("");
    const [eyeOption, setEyeOption] = React.useState("");
    const [eyeBOption, setEyeBOption] = React.useState("");
    const [mouthOption, setMouthOption] = React.useState("");
    const [skinOption, setSkinOption] = React.useState("");

    const handleClose = () => {
        setShowTop(false);
        setShowAcc(false);
        setShowFC(false);
        setShowCloth(false);
        setShowEye(false);
        setShowEyeB(false);
        setShowMouth(false);
        setShowMouth(false);
        setShowSkin(false);
        setAnchorEl(null);
    };
    return (
        <div className='home-page-background'>
            <div className="ChangeAvatar">
                <h1>Create your Avatar</h1>
                <Avatar
                    style={{ width: '200px', height: '200px' }}
                    avatarStyle='Circle'
                    topType={topOption}
                    accessoriesType={accOption}
                    hairColor='BrownDark'
                    facialHairType={fcOption}
                    clotheType={clothOption}
                    clotheColor='PastelBlue'
                    eyeType={eyeOption}
                    eyebrowType={eyeBOption}
                    mouthType={mouthOption}
                    skinColor={skinOption}
                />
                <div className="ButtonClass">
                    <Button
                        className="ButtonWidth"
                        color="primary"
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            setAnchorEl(event.currentTarget); setShowTop(!showTop)
                        }}>
                        Top
                    </Button>
                    <Menu
                        id="fade-menu"
                        keepMounted
                        open={showTop}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        {topOptions.map((topOption) => (
                            <MenuItem key={topOption} onClick={() => {
                                setTopOption(topOption);
                                handleClose();
                            }}>
                                {topOption}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="ButtonClass">
                    <Button
                        className="ButtonWidth"
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            setAnchorEl(event.currentTarget); setShowAcc(!showTop)
                        }}>
                        👓 Accessories
                    </Button>
                    <Menu
                        id="fade-menu"
                        keepMounted
                        open={showAcc}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        {accessories.map((accessories) => (
                            <MenuItem key={accessories} onClick={() => {
                                setAccOption(accessories);
                                handleClose();
                            }}>
                                {accessories}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="ButtonClass">
                    <Button
                        className="ButtonWidth"
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            setAnchorEl(event.currentTarget); setShowFC(!showFC)
                        }}>
                        Facial hair
                    </Button>
                    <Menu
                        id="fade-menu"
                        keepMounted
                        open={showFC}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        {facialHair.map((FC) => (
                            <MenuItem key={FC} onClick={() => {
                                setFCOption(FC);
                                handleClose();
                            }}>
                                {FC}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="ButtonClass">
                    <Button
                        className="ButtonWidth"
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            setAnchorEl(event.currentTarget); setShowCloth(!showCloth)
                        }}>
                        👔 Clothes
                    </Button>
                    <Menu
                        id="fade-menu"
                        keepMounted
                        open={showCloth}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        {cloths.map((cloth) => (
                            <MenuItem key={cloth} onClick={() => {
                                setClothOption(cloth);
                                handleClose();
                            }}>
                                {cloth}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="ButtonClass">
                    <Button
                        className="ButtonWidth"
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            setAnchorEl(event.currentTarget); setShowEye(!showEye)
                        }}>
                        👁 Eyes
                    </Button>
                    <Menu
                        id="fade-menu"
                        keepMounted
                        open={showEye}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        {eye.map((eyes) => (
                            <MenuItem key={eyes} onClick={() => {
                                setEyeOption(eyes);
                                handleClose();
                            }}>
                                {eyes}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="ButtonClass">
                    <Button
                        className="ButtonWidth"
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            setAnchorEl(event.currentTarget);
                            setShowEyeB(!showEyeB);
                        }}>
                        ✏️ Eyebrow
                    </Button>
                    <Menu
                        id="fade-menu"
                        keepMounted
                        open={showEyeB}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        {eyebrows.map((eyeB) => (
                            <MenuItem key={eyeB} onClick={() => {
                                setEyeBOption(eyeB);
                                handleClose();
                            }}>
                                {eyeB}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="ButtonClass">
                    <Button
                        className="ButtonWidth"
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            setAnchorEl(event.currentTarget);
                            setShowMouth(!showMouth);

                        }}>
                        👄 Mouth
                    </Button>
                    <Menu
                        id="fade-menu"
                        keepMounted
                        open={showMouth}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        {mouth.map((m) => (
                            <MenuItem key={m} onClick={() => {
                                setMouthOption(m);
                                handleClose();
                            }}>
                                {m}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="ButtonClass">
                    <Button
                        className="ButtonWidth"
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                            setShowSkin(!showSkin);
                            setAnchorEl(event.currentTarget);

                        }}>
                        🎨 Skin
                    </Button>
                    <Menu
                        id="fade-menu"
                        keepMounted
                        open={showSkin}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        {skin.map((s) => (
                            <MenuItem key={s} onClick={() => {
                                setSkinOption(s);
                                handleClose();
                            }}>
                                {s}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
        </div >
    )
}

export default WaitingForPlayers;