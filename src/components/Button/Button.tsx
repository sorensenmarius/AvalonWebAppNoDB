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

export default Button;