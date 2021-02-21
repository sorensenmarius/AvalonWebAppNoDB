import Player from "../../../models/Player";

interface ISelectPlayersProps {
    num: number,
    players: Player[],
    selected: Player[],
    setSelected: (players: Player[]) => void
}

const SelectPlayers = ({num, players, selected, setSelected} : ISelectPlayersProps) => {
    const updateSelected = (player: Player) => {
        if (selected.some(p => p.id === player.id)) {
            setSelected(selected.filter(p => p.id !== player.id))
        } else if (selected.length !== num) {
            setSelected([...selected, player])
        }
    }

    return(
        <>
            Select {num} players:
            {players.map(p => (
                <div key={p.id}>
                    <input 
                        type='checkbox'
                        value={p.id}
                        checked={selected.some(player => player.id === p.id)}
                        onChange={() => updateSelected(p)}
                    />
                    {p.name}
                </div>
            ))}
        </>
    )
}

export default SelectPlayers;