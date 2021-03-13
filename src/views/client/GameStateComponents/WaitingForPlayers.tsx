import React, { useState } from 'react';
import IGameProp from "../../../models/IGameProp";
import Avatar from 'avataaars'
import { Button, Menu, MenuItem } from "@material-ui/core";

import "./WaitingForPlayers.css"

import IAvatar, { randomAvatar } from '../Helpers/Avatars/IAvatar';
import { accessoriesType, clotheType, eyebrowType, eyeType, facialHairType, mouthType, skinColor, topType } from '../Helpers/Avatars/AvatarItems';

const WaitingForPlayers = ({ game }: IGameProp) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [avatar, setAvatar] = useState<IAvatar>(randomAvatar())
    const [show, setShow] = useState<boolean[]>(new Array(8).fill(false))

    const options = [
        { name: 'topType', values: topType, displayName: 'Top' },
        { name: 'accessoriesType', values: accessoriesType, displayName: '👓 Accessories'  },
        { name: 'facialHairType', values: facialHairType, displayName: 'Facial hair'  },
        { name: 'clotheType', values: clotheType, displayName: '👔 Clothes'  },
        { name: 'eyeType', values: eyeType, displayName: '👁 Eyes'  },
        { name: 'eyebrowType', values: eyebrowType, displayName: '✏️ Eyebrow'  },
        { name: 'mouthType', values: mouthType, displayName: '👄 Mouth'  },
        { name: 'skinColor', values: skinColor, displayName: '🎨 Skin'  },
    ]

    const handleClose = () => {
        setShow(new Array(8).fill(false))
        setAnchorEl(null);
    };

    return (
        <div className='home-page-background'>
            <div className="ChangeAvatar">
                <h1>Create your Avatar</h1>
                <Avatar
                    style={{ width: '200px', height: '200px' }}
                    avatarStyle='Transparent'
                    hairColor='BrownDark'
                    clotheColor='PastelBlue'
                    {...avatar}
                />
                {options.map((option: {name: string, values: string[], displayName: string}, i: number) => (
                    <div className="ButtonClass">
                        <Button
                            className="ButtonWidth"
                            color="primary"
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            onClick={(event: React.MouseEvent<HTMLElement>) => {
                                setAnchorEl(event.currentTarget); 
                                let showCopy = show
                                showCopy[i] = true
                                setShow(showCopy)
                            }}>
                            {option.displayName}
                        </Button>
                        <Menu
                            id="fade-menu"
                            keepMounted
                            open={show[i]}
                            onClose={handleClose}
                            anchorEl={anchorEl}
                        >
                            {option.values.map((o) => (
                                <MenuItem key={o} onClick={() => {
                                    let avatarCopy = avatar as any
                                    avatarCopy[option.name] = o 
                                    setAvatar(avatarCopy as IAvatar);
                                    handleClose();
                                }}>
                                    {o}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default WaitingForPlayers;