import './Button.css'

interface IButtonProps {
    onClick: () => void
    disabled?: boolean
    children?: React.ReactNode
}

const Button = ({onClick, disabled = false, children}: IButtonProps) => {

    const clickButton = () => {
        if (!disabled)
            onClick()
    }

    return(
        <div 
            className={'fantasy-button'}
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