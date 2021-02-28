import './Button.less'

interface IGodButton {
    onClick: () => void
    isBlue?: boolean
    children?: React.ReactNode
}

const GodButton = ({onClick, isBlue = true, children}: IGodButton) => {
    return(
        <div className='fantasy-button'>
            <span 
                onClick={onClick}>
                {children}
            </span>
        </div>
    )
}

export default GodButton;