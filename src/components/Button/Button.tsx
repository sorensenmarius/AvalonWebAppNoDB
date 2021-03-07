import './Button.css'

interface IButtonProps {
    onClick: () => void
    disabled?: boolean
    children?: React.ReactNode
    className?: string
    red?: boolean
}

const Button = ({onClick, disabled = false, children, className, red}: IButtonProps) => {

    const clickButton = () => {
        if (!disabled)
            onClick()
    }

    return(
        <div 
            className={ `fantasy-button 
                            ${className ?? ''} 
                            ${disabled ? 'disabled' : ''}
                            ${red ? 'red' : ''}
                        `}
            onClick={clickButton}
        >
            <span>
                {children}
            </span>
        </div>
    )
}

export default Button;