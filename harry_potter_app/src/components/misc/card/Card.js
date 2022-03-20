import { useWidth } from "../../../helpers/useWidth"
import "./card.scss"
import save from "../../../assets/saved.svg"
import saved from "../../../assets/save.svg"
import { useDispatch, useSelector } from "react-redux"
import { action } from "../../../api/redux/action"

const Card = ({character}) => {
    const dispatch = useDispatch()
    const { favoritos } = useSelector(e => e.characters)
    const width = useWidth()
    const isAlive = character.alive ? "VIVO" : "FINADO"
    const isStaff = character.hogwartsStaff ? "STAFF" : "ESTUDIANTE"

    const handleClick = (e) => {
        console.log([...favoritos, e])
        if(favoritos.length < 5){
            dispatch(action.favoritos([...favoritos, e]))
        }
    }

    return (
        <>
            <div className="card">
                <img src={!!favoritos.find(e => e.name === character.name) ? saved : save} className="card__saved" onClick={() => handleClick(character)}></img>
                <div className={`card__image ${character.house}`}>
                    <img src={character.image}/>
                </div>
                <div className={`card__info ${!character.alive && "dead"}`}>
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