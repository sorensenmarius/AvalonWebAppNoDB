import Player from "../../../models/Player";

interface ISelectPlayersProps {
    num: number,
    players: Player[],
    selected: Player[],
    setSelected: (players: Player[]) => void
}

const SelectPlayers = ({num, players, selected, setSelected} : ISelectPlayersProps) => {
    const updateSelected = (player: Player) => {
        const playerIndex = selected.findIndex(p => p.id === player.id);

        if (playerIndex) {
            setSelected(selected.splice(playerIndex, 1))
        } else if (selected.length !== num) {
            selected.push(player)

            setSelected(selected)
        }
    }

    return(
        <>
            Select {num} players:
            {players.map(p => (
                <>
                    <input 
                        type='checkbox'
                        value={p.id}
                        checked={selected.some(player => player.id === p.id)}
                        onChange={() => updateSelected(p)}
                    />
                    {p.name}
                </>
            ))}
        </>
    )
}

export default SelectPlayers;