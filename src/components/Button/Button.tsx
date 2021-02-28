import './Button.css'

interface IButton {
    onClick: () => void
    disabled?: boolean
    children?: React.ReactNode
    className?: string
}

const GodButton = ({onClick, disabled = false, children, className}: IButton) => {

    const clickButton = () => {
        if (!disabled)
            onClick()
    }

    return(
        <div 
            className={className ? 'fantasy-button ' + className : 'fantasy-button'}
            style={{
                color: disabled ? 'darkred' : 'lightgoldenrodyellow'
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