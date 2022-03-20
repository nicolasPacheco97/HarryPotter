import "./button.scss";

const Button = ({label, handleClick, actualOpt, type}) => {
    return (
        <button type={type} id={label} onClick={handleClick} className={`button ${label === actualOpt ? "selected" : ""}`}>
            {label}
        </button>
    )
}

export default Button