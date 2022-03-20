import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import add from "../../assets/add.svg"
import saved from "../../assets/saved.svg"
import Form from "../misc/form/Form"
import Modal from "../misc/modal/Modal"
import Trash from "../../assets/Trash.svg"

import "./bar.scss"
import { action } from "../../api/redux/action"

const Bar = () => {
    const dispatch = useDispatch()
    const { favoritos, isAdded } = useSelector(e => e.characters)
    const [ visible, setVisible ] = useState(false)
    const [ isVisible, setIsVisible ] = useState(false)

    const handleClick = (e) => {
        dispatch(action.favoritos(favoritos.filter(fav => fav.name !== e.name)))
    }

    useEffect(() => {
        if(isAdded) {
            setVisible(false)
        }
    },[isAdded])

    return (
        <>
            <div className="bar" >
                <div className="bar-fav" onClick={() => setIsVisible(!isVisible)}> 
                    {isVisible && <div className="bar-dropdown">
                        {favoritos.map((e, i) => (
                            <li key={i}>
                                <img src={e.image}></img>
                                <p>{e.name}</p>
                                <img src={Trash} onClick={() => handleClick(e)}></img>
                            </li>
                        ))}
                    </div>}
                    FAVORITOS
                    <span onClick={() => setIsVisible(!isVisible)}>
                        <img src={saved}></img>
                    </span>
                </div>
                <div className="bar-add" onClick={() => setVisible(true)}>AGREGAR 
                    <span onClick={() => setVisible(true)}>
                        <img src={add}></img>
                    </span>
                </div>

            </div>

            <Modal 
                visible={visible} 
                header="Agrega un personaje" 
                onHide={() => setVisible(false)}
                content={<Form/>}
            />
        </>
    )
}

export default Bar