import './Button.css'

interface IButtonProps {
    onClick: (event?: React.MouseEvent<HTMLElement>) => void
    disabled?: boolean
    children?: React.ReactNode
    className?: string
    red?: boolean
}

const Button = ({ onClick, disabled = false, children, className, red }: IButtonProps) => {

    const clickButton = (event: React.MouseEvent<HTMLElement>) => {
        if (!disabled)
            onClick(event)
    }

    return (
        <div
            className={`fantasy-button 
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