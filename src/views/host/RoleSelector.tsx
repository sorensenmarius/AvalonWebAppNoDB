import Role from "../../models/enums/Roles";
import Game from "../../models/Game";

interface IRoleSelectorProps {
    game?: Game
    roles: number[]
    setRoles: (roles: number[]) => void
}

const RoleSelector = ({game, roles, setRoles}: IRoleSelectorProps) => {
    const availableRoles = [2, 3, 5, 6, 7, 8];

    const selectRole = (role: number) => {
        if (roles.includes(role)) {
            setRoles(roles.filter(r => r !== role))
        } else {
            setRoles([...roles, role])
        }
    }

    return(
        <>
            {availableRoles.map(r => (
                <>
                <label>
                    <input
                        type='checkbox'
                        checked={roles.includes(r)}
                        onChange={() => selectRole(r)}
                    />
                    {Role[r]}
                </label>
                </>
            ))}
        </>
    )
}

export default RoleSelector;