import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import AvatarComponent from "avataaars";
import React, { useState } from "react";
import Player from "../../../models/Player";
import { AvatarDefaultSettings } from "./Avatars/IAvatar";
import './RoleModal.css'

const RoleModal = ({ me }: {me: Player}) => {
    const [open, setOpen] = useState(false)

    return(
        <>
            {me.roleId && 
                <>
                    <Fab color='primary' className='role-fab' onClick={() => setOpen(!open)}>
                        <Person />
                    </Fab>
                    <Dialog
                        open={open}
                        onClose={() => setOpen(false)}
                    >
                        <DialogContent>
                            <AvatarComponent
                                style={{width: '80%', height: '200px'}}
                                {...AvatarDefaultSettings}
                                {...me.avatar}
                            />
                            <h1>{me.roleName}</h1>
                            {me.roleInfo.split('|').map((s: string, i: number) => (
                                <p key={i + '-modal-text'}>{s}</p>
                            ))}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpen(false)} >Close</Button>
                        </DialogActions>
                    </Dialog>
                </>
            }
        </>
    )
}

export default RoleModal;