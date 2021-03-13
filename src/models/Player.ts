import IAvatar from "../views/client/Helpers/Avatars/IAvatar";
import Role from "./enums/Roles";

interface Player {
    id: string,
    name: string,
    roleId: Role,
    roleInfo: string,
    roleName: string,
    isEvil: boolean,
    avatar: IAvatar
}

export default Player;