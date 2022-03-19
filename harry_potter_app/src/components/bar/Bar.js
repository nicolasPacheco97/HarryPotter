import { useState } from "react"

import add from "../../assets/add.svg"
import saved from "../../assets/saved.svg"
import Modal from "../misc/modal/Modal"

import "./bar.scss"

const Bar = () => {
    const [ visible, setVisible ] = useState(false)
    return (
        <>
            <div className="bar">
                <div className="bar-fav">FAVORITOS 
                    <span>
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
                labelButton="GUARDAR"
            />
        </>
    )
}

export default Bar