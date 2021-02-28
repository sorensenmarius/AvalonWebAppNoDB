import './Button.css'

interface IButton {
    onClick: () => void
    disabled?: boolean
    children?: React.ReactNode
}

const GodButton = ({onClick, disabled = false, children}: IButton) => {

    const clickButton = () => {
        if (!disabled)
            onClick()
    }

    return(
        <div 
            className='fantasy-button'
            style={{
                color: disabled ? 'darkred' : 'burlywood'
            }}
            onClick={clickButton}
        >
            <span>
                {children}
            </span>
        </div>
    )
}

export default GodButton;