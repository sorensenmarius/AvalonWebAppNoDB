import './Button.css'

interface IButtonProps {
    onClick: () => void
    disabled?: boolean
    children?: React.ReactNode
    className?: string
}

const Button = ({onClick, disabled = false, children, className}: IButtonProps) => {

    const clickButton = () => {
        if (!disabled)
            onClick()
    }

    return(
        <div 
            className={`fantasy-button ${className ?? ''}`}
            style={{
                color: disabled ? '#777' : 'white'
            }}
            onClick={clickButton}
        >
            <span>
                {children}
            </span>
        </div>
    )
}

export default Button;