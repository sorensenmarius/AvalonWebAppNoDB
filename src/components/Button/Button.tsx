import './Button.css'

interface IButtonProps {
    onClick: () => void
    disabled?: boolean
    children?: React.ReactNode
    center?: boolean
}

const Button = ({onClick, disabled = false, children, center}: IButtonProps) => {

    const clickButton = () => {
        if (!disabled)
            onClick()
    }

    return(
        <div 
            className={`fantasy-button${center ? ' center-button' : ''}`}
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

export default Button;