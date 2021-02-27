import Role from "./enums/Roles";

interface Player {
    id: string,
    name: string,
    roleId: Role,
    roleInfo: string,
    roleName: string,
    isEvil: boolean,
}

export default Player;