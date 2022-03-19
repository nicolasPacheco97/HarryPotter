import "./button.scss";

const Button = ({label, handleClick, isSelected}) => {
    return (
        <button id={label} onClick={handleClick} className={`button ${isSelected ? "selected" : ""}`}>
            {label}
        </button>
    )
}

export default Button