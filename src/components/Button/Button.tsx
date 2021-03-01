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
            className={`fantasy-button ${className ?? ''} ${disabled ? 'button-disabled' : ''}`}
            onClick={clickButton}
        >
            <span>
                {children}
            </span>
        </div>
    )
}

export default Button;