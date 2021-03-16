import Player from "../../../models/Player";

import './SelectPlayers.css'

interface ISelectPlayersProps {
    num: number,
    players: Player[],
    selected: Player[],
    setSelected: (players: Player[]) => void
    assassin?: boolean
}

const SelectPlayers = ({num, players, selected, setSelected, assassin} : ISelectPlayersProps) => {
    const updateSelected = (player: Player) => {
        if (assassin) {
            setSelected([player])
            return
        }

        if (selected.some(p => p.id === player.id)) {
            setSelected(selected.filter(p => p.id !== player.id))
        } else if (selected.length !== num) {
            setSelected([...selected, player])
        }
    }

    const isSelected = (p: Player) => selected.some(player => player.id === p.id)

    return(
        <>
            <div className={`select-players-list ${players.length > 6 ? 'big' : ''}`}>
                {players.map((p: Player) => (
                    <div 
                        key={p.id + '-select-players'}
                        className={`select-players-item 
                                        ${isSelected(p) ? 'selected' : ''}
                                        ${assassin ? 'red' : ''}`}
                        onClick={() => updateSelected(p)}
                    >
                        <p>{p.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SelectPlayers;