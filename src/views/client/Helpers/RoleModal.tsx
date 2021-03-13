import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, Fab } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React, { useState } from "react";
import Player from "../../../models/Player";
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
                        <DialogTitle>{me.roleName}</DialogTitle>
                        <DialogContentText>
                            {me.roleInfo.split('|').map((s: string, i: number) => (
                                <p key={i + '-modal-text'}>{s}</p>
                            ))}
                        </DialogContentText>
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