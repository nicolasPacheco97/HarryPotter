import { useEffect } from "react"
import { useWidth } from "../../../helpers/useWidth"
import "./card.scss"

const Card = ({character}) => {
    const width = useWidth()
    const isAlive = character.alive ? "VIVO" : "FINADO"
    const isStaff = character.hogwartsStaff ? "STAFF" : "ESTUDIANTE"
    useEffect(() => { console.log(character) },[character])

    return (
        <>
            <div className="card">
                <div className={`card__image ${character.house}`}></div>
                <div className="card__info">
                    {width > 640 && <span> {isAlive} / {isStaff} </span>}
                    <p>{character.name}</p>
                    {width < 640 && <div>
                        <p>{isAlive}</p>
                        <p>{isStaff}</p>
                    </div>}

                    {width > 640 && <div>
                        <p><span>Cumpleaños:</span> {character.dateOfBirth}</p>
                        <p><span>Género:</span> {character.gender}</p>
                        <p><span>Color de ojos:</span> {character.eyeColour}</p>
                        <p><span>Color de pelo:</span> {character.hairColour}</p>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Card