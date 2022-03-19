import Button from "../button/Button"
import "./modal.scss"

const Modal = ({header, visible, onHide, labelButton, actionButton, content}) => {
    return (
        <>
            {visible && <div className="modal">
                <div className="modal-container">
                    <div className="modal-header">{header} <span onClick={onHide}>X</span></div>
                    <div className="modal-body">{content}</div>
                    <div className="modal-footer">{!!labelButton && <Button label={labelButton} handleClick={actionButton}/>}</div>
                </div>
            </div>}
        </>
    )
}

export default Modal